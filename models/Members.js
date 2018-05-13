var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    name: String,
    role: String,
    portfolio: String,
    description: String,
    status: String,
    notes: String,
    updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Members', MembersSchema);