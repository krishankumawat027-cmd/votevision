const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { EligibilityCheck, DocumentChecklist } = require('../models/AppModels');

// POST /api/eligibility/check
router.post('/check', auth, async (req, res) => {
    try {
        const { age, nationality, registered, state, firstTime } = req.body;
        
        let score = "Ready to Vote";
        let missing = [];

        if (nationality !== 'Indian') {
            score = "Not Ready Yet";
            missing.push("Only Indian citizens are eligible to vote.");
        }
        if (age < 18) {
            score = "Not Ready Yet";
            missing.push("You must be at least 18 years old to vote.");
        }
        if (registered === 'No') {
            score = score === "Not Ready Yet" ? "Not Ready Yet" : "Almost Ready";
            missing.push("You need to register as a voter (Form 6) in your state.");
        }

        const eligibility = new EligibilityCheck({
            userId: req.user.id,
            age, nationality, registered, state, firstTime,
            readinessScore: score
        });
        await eligibility.save();

        res.json({ score, missing });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

// GET /api/eligibility/history
router.get('/history', auth, async (req, res) => {
    try {
        const history = await EligibilityCheck.findOne({ userId: req.user.id }).sort({ timestamp: -1 });
        res.json(history);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

// POST /api/checklist/save
router.post('/save', auth, async (req, res) => {
    try {
        const { items, completed } = req.body;
        let checklist = await DocumentChecklist.findOne({ userId: req.user.id });
        if (checklist) {
            checklist.items = items;
            checklist.completed = completed;
        } else {
            checklist = new DocumentChecklist({ userId: req.user.id, items, completed });
        }
        await checklist.save();
        res.json({ msg: 'Checklist saved' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;
