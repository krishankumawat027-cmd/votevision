const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const auth = require("../middlewares/authMiddleware");
const {
    ChatHistory,
    Complaint,
    Timeline,
    Candidate,
    Booth,
    Notification,
    DocumentChecklist,
    EligibilityCheck
} = require("../models/AppModels");
const {
    demoTimeline,
    demoCandidates,
    demoBooths,
    demoNotifications,
    store,
    clone
} = require("../demoStore");
const { GoogleGenerativeAI } = require("@google/generative-ai");

function isDbReady() {
    return mongoose.connection.readyState === 1;
}

function getUserCollection(map, userId, fallback = []) {
    if (!map.has(userId)) {
        map.set(userId, clone(fallback));
    }
    return map.get(userId);
}

function getDemoChatReply(message) {
    const lowerMessage = String(message || "").toLowerCase();

    if (lowerMessage.includes("register")) {
        return "To vote, first make sure your name is on the electoral roll. Keep a valid ID ready and complete registration before the deadline shown in the timeline.";
    }

    if (lowerMessage.includes("whatsapp")) {
        return "Voting cannot be done through WhatsApp. Always rely on official Election Commission channels and your assigned polling booth.";
    }

    if (lowerMessage.includes("booth") || lowerMessage.includes("polling")) {
        return "Use the Booth Finder to search by city, area, or pin code. Carry one valid ID and arrive during the polling hours listed for your booth.";
    }

    return "For election day, make sure you are registered, carry one valid ID, verify your polling booth, and follow official Election Commission instructions.";
}

async function getGeminiReply(message) {
    if (!process.env.GEMINI_API_KEY) {
        return getDemoChatReply(message);
    }

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const prompt = `You are VoteVision AI, an election guidance assistant.
Give clear, neutral, concise help about voting, registration, documents, booths, rights, and election timelines in India.
Keep the answer under 4 short sentences.
User question: ${message}`;
        const result = await model.generateContent(prompt);
        const text = result.response.text().trim();
        return text || getDemoChatReply(message);
    } catch (error) {
        console.error("Gemini API Error:", error.message);
        return getDemoChatReply(message);
    }
}

function computeEligibility({ citizen, dob }) {
    if (!citizen || !dob) {
        return { error: "Citizen status and date of birth are required." };
    }

    const today = new Date();
    const birthDate = new Date(dob);
    if (Number.isNaN(birthDate.getTime())) {
        return { error: "Please enter a valid date of birth." };
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age -= 1;
    }

    const eligible = citizen === "yes" && age >= 18;
    return {
        eligible,
        age,
        message: eligible
            ? "You are eligible to vote if your name is on the electoral roll."
            : "You must be an Indian citizen aged 18 or above and registered to vote."
    };
}

router.post("/chat", auth, async (req, res) => {
    const { message } = req.body || {};
    if (!message) {
        return res.status(400).json({ msg: "Message is required" });
    }

    const userId = req.user.id;
    const reply = await getGeminiReply(message);

    if (isDbReady()) {
        try {
            await ChatHistory.create([
                { userId, message, isUser: true },
                { userId, message: reply, isUser: false }
            ]);
        } catch (error) {
            console.error("Chat history save failed:", error.message);
        }
    } else {
        const history = getUserCollection(store.chatHistoryByUser, userId);
        history.push(
            { userId, message, isUser: true, timestamp: new Date().toISOString() },
            { userId, message: reply, isUser: false, timestamp: new Date().toISOString() }
        );
    }

    res.json({ reply });
});

router.get("/chat", auth, async (req, res) => {
    const userId = req.user.id;

    if (isDbReady()) {
        try {
            const history = await ChatHistory.find({ userId }).sort({ timestamp: 1 }).lean();
            return res.json(history);
        } catch (error) {
            console.error("Chat history load failed:", error.message);
        }
    }

    res.json(getUserCollection(store.chatHistoryByUser, userId));
});

router.post("/eligibility", (req, res) => {
    const result = computeEligibility(req.body || {});
    if (result.error) {
        return res.status(400).json({ msg: result.error });
    }

    res.json(result);
});

router.post("/complaints", auth, async (req, res) => {
    const { type, description, fullName, email, location, proofUrl } = req.body || {};
    if (!type || !description) {
        return res.status(400).json({ msg: "Complaint category and description are required." });
    }

    const userId = req.user.id;
    const payload = {
        id: `complaint-${Date.now()}`,
        userId,
        type,
        description,
        fullName: fullName || "",
        email: email || req.user.email || "",
        location: location || "",
        proofUrl: proofUrl || "",
        status: "Submitted",
        date: new Date().toISOString()
    };
    getUserCollection(store.complaintsByUser, userId).unshift(clone(payload));

    if (isDbReady()) {
        try {
            const savedComplaint = await Complaint.create({
                userId,
                type,
                description,
                status: payload.status,
                date: payload.date
            });
            payload.id = savedComplaint._id.toString();
        } catch (error) {
            console.error("Complaint save failed:", error.message);
        }
    }

    res.json({
        msg: "Complaint registered successfully.",
        complaint: payload
    });
});

router.get("/complaints/my", auth, async (req, res) => {
    const userId = req.user.id;

    if (isDbReady()) {
        try {
            const complaints = await Complaint.find({ userId }).sort({ date: -1 }).lean();
            if (complaints.length > 0) {
                return res.json(complaints.map((item) => ({
                    id: item._id.toString(),
                    type: item.type,
                    description: item.description,
                    status: item.status,
                    date: item.date
                })));
            }
        } catch (error) {
            console.error("Complaint history load failed:", error.message);
        }
    }

    res.json(getUserCollection(store.complaintsByUser, userId));
});

router.get("/timeline", async (req, res) => {
    if (isDbReady()) {
        try {
            let events = await Timeline.find().sort({ order: 1 }).lean();
            if (events.length === 0) {
                await Timeline.insertMany(demoTimeline.map(({ id, ...item }) => item));
                events = await Timeline.find().sort({ order: 1 }).lean();
            }
            return res.json(events);
        } catch (error) {
            console.error("Timeline load failed:", error.message);
        }
    }

    res.json(clone(demoTimeline));
});

router.get("/candidates", async (req, res) => {
    if (isDbReady()) {
        try {
            let candidates = await Candidate.find().lean();
            if (candidates.length === 0) {
                await Candidate.insertMany(demoCandidates.map(({ id, ...item }) => item));
                candidates = await Candidate.find().lean();
            }
            return res.json(candidates);
        } catch (error) {
            console.error("Candidate load failed:", error.message);
        }
    }

    res.json(clone(demoCandidates));
});

router.get("/notifications", auth, async (req, res) => {
    const userId = req.user.id;

    if (isDbReady()) {
        try {
            let notifications = await Notification.find({
                $or: [{ userId }, { userId: null }]
            }).sort({ date: -1 }).lean();

            if (notifications.length === 0) {
                await Notification.insertMany(demoNotifications);
                notifications = await Notification.find({
                    $or: [{ userId }, { userId: null }]
                }).sort({ date: -1 }).lean();
            }

            return res.json(notifications);
        } catch (error) {
            console.error("Notification load failed:", error.message);
        }
    }

    res.json(clone(demoNotifications));
});

router.post("/readiness/checklist", auth, async (req, res) => {
    const { items, completed } = req.body || {};
    const userId = req.user.id;
    const payload = {
        items: Array.isArray(items) ? items : [],
        completed: Boolean(completed),
        timestamp: new Date().toISOString()
    };

    if (isDbReady()) {
        try {
            await DocumentChecklist.findOneAndUpdate(
                { userId },
                { userId, ...payload },
                { new: true, upsert: true }
            );
            return res.json({ msg: "Checklist saved.", ...payload });
        } catch (error) {
            console.error("Checklist save failed:", error.message);
        }
    }

    store.checklistByUser.set(userId, payload);
    res.json({ msg: "Checklist saved.", ...payload });
});

router.get("/readiness/checklist", auth, async (req, res) => {
    const userId = req.user.id;

    if (isDbReady()) {
        try {
            const checklist = await DocumentChecklist.findOne({ userId }).sort({ timestamp: -1 }).lean();
            if (checklist) {
                return res.json(checklist);
            }
        } catch (error) {
            console.error("Checklist load failed:", error.message);
        }
    }

    res.json(store.checklistByUser.get(userId) || { items: [], completed: false });
});

router.post("/readiness", auth, async (req, res) => {
    const { age, nationality, registered, state, firstTime } = req.body || {};
    const missing = [];
    let score = "Ready to Vote";

    if (nationality !== "Indian") {
        score = "Not Ready Yet";
        missing.push("Only Indian citizens are eligible to vote.");
    }

    if (Number(age) < 18) {
        score = "Not Ready Yet";
        missing.push("You must be at least 18 years old to vote.");
    }

    if (registered === "No") {
        if (score !== "Not Ready Yet") {
            score = "Almost Ready";
        }
        missing.push("Register your name on the electoral roll before voting.");
    }

    const payload = {
        userId: req.user.id,
        age: Number(age),
        nationality,
        registered,
        state,
        firstTime,
        readinessScore: score,
        missing,
        timestamp: new Date().toISOString()
    };

    if (isDbReady()) {
        try {
            await EligibilityCheck.create(payload);
            return res.json({ score, missing });
        } catch (error) {
            console.error("Readiness save failed:", error.message);
        }
    }

    store.readinessByUser.set(req.user.id, payload);
    res.json({ score, missing });
});

router.get("/config/maps", (req, res) => {
    res.json({ apiKey: process.env.GOOGLE_MAPS_API_KEY || "" });
});

router.get("/booths/demo", (req, res) => {
    res.json(clone(demoBooths));
});

module.exports = router;
