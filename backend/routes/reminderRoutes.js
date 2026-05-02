const express = require("express");
const mongoose = require("mongoose");
const auth = require("../middlewares/authMiddleware");
const { Reminder } = require("../models/AppModels");
const { store, clone } = require("../demoStore");

const router = express.Router();

function isDbReady() {
    return mongoose.connection.readyState === 1;
}

function getUserReminders(userId) {
    if (!store.remindersByUser.has(userId)) {
        store.remindersByUser.set(userId, [
            {
                id: "demo-rem-1",
                title: "Carry your voter ID",
                date: "2026-05-29",
                type: "Voting"
            }
        ]);
    }
    return store.remindersByUser.get(userId);
}

router.get("/", auth, async (req, res) => {
    const userId = req.user.id;

    if (isDbReady()) {
        try {
            const reminders = await Reminder.find({ userId }).sort({ date: 1 }).lean();
            if (reminders.length > 0) {
                return res.json(reminders.map((item) => ({
                    id: item._id.toString(),
                    title: item.title,
                    date: item.date,
                    type: item.type
                })));
            }
        } catch (error) {
            console.error("Reminder load failed:", error.message);
        }
    }

    res.json(clone(getUserReminders(userId)));
});

router.post("/", auth, async (req, res) => {
    const { title, date, type } = req.body || {};
    if (!title || !date) {
        return res.status(400).json({ msg: "Title and date are required." });
    }

    const userId = req.user.id;
    const payload = {
        id: `reminder-${Date.now()}`,
        title,
        date,
        type: type || "General"
    };
    getUserReminders(userId).push(clone(payload));

    if (isDbReady()) {
        try {
            const reminder = await Reminder.create({ userId, title, date, type: payload.type });
            payload.id = reminder._id.toString();
            return res.json(payload);
        } catch (error) {
            console.error("Reminder save failed:", error.message);
        }
    }

    res.json(payload);
});

module.exports = router;
