const mongoose = require('mongoose');

const ChatHistorySchema = new mongoose.Schema({
    userId: { type: String, required: true },
    message: String,
    isUser: Boolean,
    timestamp: { type: Date, default: Date.now }
});

const ComplaintSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    type: String,
    description: String,
    status: { type: String, default: 'Pending' },
    date: { type: Date, default: Date.now }
});

const TimelineSchema = new mongoose.Schema({
    date: String,
    title: String,
    color: String,
    active: { type: Boolean, default: false },
    order: Number
});

const CandidateSchema = new mongoose.Schema({
    name: String,
    party: String,
    promises: [String],
    color: String
});

const BoothSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    zipCode: String,
    boothNumber: String,
    pollingTime: String,
    contact: String,
    crowdLevel: { type: String, default: 'Low' }, // Low, Medium, High
    accessibility: {
        wheelchair: { type: Boolean, default: false },
        seniorCitizen: { type: Boolean, default: false },
        specialAssistance: { type: Boolean, default: false }
    },
    location: {
        lat: Number,
        lng: Number
    }
});

const NotificationSchema = new mongoose.Schema({
    userId: { type: String, required: false }, // if null, global notification
    title: String,
    message: String,
    type: { type: String, default: 'Alert' }, // 'Alert', 'News', 'Reminder'
    date: { type: Date, default: Date.now },
    read: { type: Boolean, default: false }
});

const FakeNewsQuerySchema = new mongoose.Schema({
    userId: { type: String, required: false },
    claim: String,
    status: String,
    trustScore: Number,
    explanation: String,
    timestamp: { type: Date, default: Date.now }
});

const ReminderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    title: String,
    date: String,
    type: String, // e.g., 'Registration', 'Voting', 'Result'
    timestamp: { type: Date, default: Date.now }
});

const MythSchema = new mongoose.Schema({
    myth: String,
    fact: String,
    category: String
});

const QuizQuestionSchema = new mongoose.Schema({
    question: String,
    options: [String],
    answer: String,
    explanation: String,
    category: String
});

const FavoriteBoothSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    boothId: { type: String, required: true }
});

const EligibilityCheckSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    age: Number,
    nationality: String,
    registered: String,
    state: String,
    firstTime: String,
    readinessScore: String, // Ready to Vote, Almost Ready, Not Ready Yet
    timestamp: { type: Date, default: Date.now }
});

const DocumentChecklistSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: [String],
    completed: { type: Boolean, default: false },
    timestamp: { type: Date, default: Date.now }
});

module.exports = {
    ChatHistory: mongoose.model('ChatHistory', ChatHistorySchema),
    Complaint: mongoose.model('Complaint', ComplaintSchema),
    Timeline: mongoose.model('Timeline', TimelineSchema),
    Candidate: mongoose.model('Candidate', CandidateSchema),
    Booth: mongoose.model('Booth', BoothSchema),
    Notification: mongoose.model('Notification', NotificationSchema),
    FakeNewsQuery: mongoose.model('FakeNewsQuery', FakeNewsQuerySchema),
    Reminder: mongoose.model('Reminder', ReminderSchema),
    Myth: mongoose.model('Myth', MythSchema),
    QuizQuestion: mongoose.model('QuizQuestion', QuizQuestionSchema),
    FavoriteBooth: mongoose.model('FavoriteBooth', FavoriteBoothSchema),
    EligibilityCheck: mongoose.model('EligibilityCheck', EligibilityCheckSchema),
    DocumentChecklist: mongoose.model('DocumentChecklist', DocumentChecklistSchema)
};
