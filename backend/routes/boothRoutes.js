const express = require("express");
const mongoose = require("mongoose");
const auth = require("../middlewares/authMiddleware");
const { Booth, FavoriteBooth } = require("../models/AppModels");
const { demoBooths, clone } = require("../demoStore");

const router = express.Router();

function isDbReady() {
    return mongoose.connection.readyState === 1;
}

async function getAllBooths() {
    if (isDbReady()) {
        try {
            let booths = await Booth.find().lean();
            if (booths.length === 0) {
                await Booth.insertMany(demoBooths.map(({ id, ...item }) => item));
                booths = await Booth.find().lean();
            }
            return booths;
        } catch (error) {
            console.error("Booth load failed:", error.message);
        }
    }

    return clone(demoBooths);
}

router.get("/search", async (req, res) => {
    const { query } = req.query;
    const booths = await getAllBooths();

    if (!query) {
        return res.json(booths);
    }

    const normalized = String(query).toLowerCase();
    const results = booths.filter((booth) =>
        [booth.name, booth.address, booth.city, booth.zipCode, booth.boothNumber]
            .filter(Boolean)
            .some((value) => String(value).toLowerCase().includes(normalized))
    );

    res.json(results);
});

router.get("/nearby", async (req, res) => {
    const booths = await getAllBooths();
    res.json(booths.slice(0, 3));
});

router.post("/save", auth, async (req, res) => {
    const { boothId } = req.body || {};
    if (!boothId) {
        return res.status(400).json({ msg: "Booth ID is required." });
    }

    if (isDbReady()) {
        try {
            const exists = await FavoriteBooth.findOne({ userId: req.user.id, boothId });
            if (exists) {
                return res.status(400).json({ msg: "Booth already saved." });
            }

            await FavoriteBooth.create({ userId: req.user.id, boothId: String(boothId) });
            return res.json({ msg: "Booth saved successfully." });
        } catch (error) {
            console.error("Booth save failed:", error.message);
        }
    }

    res.json({ msg: "Booth saved successfully." });
});

module.exports = router;
