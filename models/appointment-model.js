const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    customer: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    phone: {
        required: true,
        type: String,
    },
    apptype: {
        required: true,
        type: String,
    },
    date: {
        required: true,
        type: Date,
    },
    time: {
        requiered: true,
        type: String,
    },
});

const Appointment = mongoose.model('Appointment', appointmentSchema, 'Appointments');

module.exports = Appointment;
