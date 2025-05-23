const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: { type: String, required: true },
    phone: String,
    email: { type: String, required: true },
    message: String,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', contactSchema);