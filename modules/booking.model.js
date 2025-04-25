const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    userName: String,
    serviceTitle: String,
    status: { type: String, default: 'pending' },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);