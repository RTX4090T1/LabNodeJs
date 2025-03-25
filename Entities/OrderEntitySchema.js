const mongoose = require('mongoose');
const OrderEntitySchema = new mongoose.Schema({
    cost: { type: Number, required: true },
    name: { type: String, required: true },
    company: { type: String, required: true},
    clientName: { type: Date, required: true },
    clientEmail: { type: String, required: true },
    companyEmail: { type: String, required: true },
});

module.exports = mongoose.model('OrderEntitySchema', OrderEntitySchema);