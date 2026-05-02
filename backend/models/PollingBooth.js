const mongoose = require('mongoose');

const PollingBoothSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    area: { type: String, required: true },
    pinCode: { type: String, required: true },
    location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true }
    }
});

module.exports = mongoose.model('PollingBooth', PollingBoothSchema);
