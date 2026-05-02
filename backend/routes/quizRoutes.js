const express = require("express");
const mongoose = require("mongoose");
const { QuizQuestion } = require("../models/AppModels");
const { demoQuiz, clone } = require("../demoStore");

const router = express.Router();

function isDbReady() {
    return mongoose.connection.readyState === 1;
}

router.get("/", async (req, res) => {
    if (isDbReady()) {
        try {
            let questions = await QuizQuestion.find().lean();
            if (questions.length === 0) {
                await QuizQuestion.insertMany(demoQuiz.map(({ id, ...item }) => item));
                questions = await QuizQuestion.find().lean();
            }
            return res.json(questions);
        } catch (error) {
            console.error("Quiz load failed:", error.message);
        }
    }

    res.json(clone(demoQuiz));
});

module.exports = router;
