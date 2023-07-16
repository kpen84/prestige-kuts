const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    barber: {
        required: true,
        type: String
    },
    customer: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    apptype: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: Date
    }
})

module.exports = mongoose.model('appointments', dataSchema)