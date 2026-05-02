const express = require("express");
const mongoose = require("mongoose");
const { Myth } = require("../models/AppModels");
const { demoMyths, clone } = require("../demoStore");

const router = express.Router();

function isDbReady() {
    return mongoose.connection.readyState === 1;
}

router.get("/", async (req, res) => {
    if (isDbReady()) {
        try {
            let myths = await Myth.find().lean();
            if (myths.length === 0) {
                await Myth.insertMany(demoMyths.map(({ id, ...item }) => item));
                myths = await Myth.find().lean();
            }
            return res.json(myths);
        } catch (error) {
            console.error("Myths load failed:", error.message);
        }
    }

    res.json(clone(demoMyths));
});

module.exports = router;
