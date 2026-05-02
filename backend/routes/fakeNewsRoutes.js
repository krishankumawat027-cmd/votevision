const express = require("express");
const mongoose = require("mongoose");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { FakeNewsQuery } = require("../models/AppModels");

const router = express.Router();

function isDbReady() {
    return mongoose.connection.readyState === 1;
}

function getRuleBasedResult(claim) {
    const lowerClaim = String(claim || "").toLowerCase();

    if (
        lowerClaim.includes("voting can be done through whatsapp") ||
        lowerClaim.includes("vote through whatsapp") ||
        lowerClaim.includes("whatsapp vote")
    ) {
        return {
            status: "False",
            trustScore: 5,
            reason: "Voting cannot be done through WhatsApp. Use only official Election Commission voting methods."
        };
    }

    if (lowerClaim.includes("without registration")) {
        return {
            status: "False",
            trustScore: 10,
            reason: "Voter registration is required before you can vote."
        };
    }

    if (lowerClaim.includes("polling booths open 24 hours")) {
        return {
            status: "False",
            trustScore: 10,
            reason: "Polling booths operate during fixed hours announced by election authorities."
        };
    }

    if (lowerClaim.includes("18") && lowerClaim.includes("vote")) {
        return {
            status: "True",
            trustScore: 95,
            reason: "Indian citizens aged 18 or above can vote if they are registered."
        };
    }

    return null;
}

async function getAiResult(claim) {
    if (!process.env.GEMINI_API_KEY) {
        return null;
    }

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const prompt = `You are an election misinformation checker for India.
Return strict JSON with keys status, trustScore, reason.
status must be one of True, False, Unverified.
Claim: "${claim}"`;
        const result = await model.generateContent(prompt);
        let text = result.response.text().trim();
        text = text.replace(/```json/gi, "").replace(/```/g, "").trim();
        const parsed = JSON.parse(text);
        return {
            status: parsed.status || "Unverified",
            trustScore: Number(parsed.trustScore) || 50,
            reason: parsed.reason || "Please verify this claim using official sources."
        };
    } catch (error) {
        console.error("Gemini verification failed:", error.message);
        return null;
    }
}

router.post("/fake-news", async (req, res) => {
    const { claim } = req.body || {};
    if (!claim || typeof claim !== "string" || !claim.trim()) {
        return res.status(400).json({ msg: "Claim text is required" });
    }

    const payload =
        getRuleBasedResult(claim) ||
        (await getAiResult(claim)) || {
            status: "Unverified",
            trustScore: 50,
            reason: "The verification service is in demo mode. Please confirm this claim with official election sources."
        };

    if (isDbReady()) {
        try {
            await FakeNewsQuery.create({
                claim,
                status: payload.status,
                trustScore: payload.trustScore,
                explanation: payload.reason
            });
        } catch (error) {
            console.error("Fake news query save failed:", error.message);
        }
    }

    res.json(payload);
});

module.exports = router;
