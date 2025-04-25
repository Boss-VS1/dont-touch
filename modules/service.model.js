const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    title: { type: String, required: true },
    img: String,
    description: String
});

module.exports = mongoose.model('Service', serviceSchema);