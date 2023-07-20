const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    barber: {
        required: true,
        type: String,
    },
    customer: {
        required: true,
        type: String,
    },
    email: {
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
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
