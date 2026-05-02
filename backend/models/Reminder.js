const mongoose = require('mongoose');

const ReminderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    date: { type: Date, required: true },
    type: { type: String, required: true, enum: ['Registration', 'Voting', 'Counting', 'Result'] },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reminder', ReminderSchema);
