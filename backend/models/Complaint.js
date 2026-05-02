const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String },
    proofUrl: { type: String },
    status: { type: String, default: 'Submitted', enum: ['Submitted', 'Under Review', 'Resolved'] },
    complaintId: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Complaint', ComplaintSchema);
