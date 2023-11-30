const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment-model');

// //Post Method
// router.post('/', async (req, res) => {
//     console.log('Success');
//     const data = new Appointment({
//         customer: req.body.customer,
//         email: req.body.email,
//         phone: req.body.phone,
//         apptype: req.body.apptype,
//         date: req.body.date,
//         time: req.body.time,
//     });

//     try {
//         const dataToSave = await data.save();
//         res.status(200).json(dataToSave);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// Get all Method
// router.get('/getAll', async (req, res) => {
//     try {
//         console.log('Fetching all appointments...');
//         const allAppointments = await Appointment.find();
//         console.log('Fetched appointments:', allAppointments);
//         res.status(200).json(allAppointments);
//     } catch (error) {
//         console.error('Error fetching appointments:', error);
//         res.status(500).json({ message: 'Error fetching appointments' });
//     }
// });

// Get by ID Method
// router.get('/getOne/:id', (req, res) => {
//     res.send(req.params.id);
// });

// Update by ID Method
// router.patch('/update/:id', (req, res) => {
//     res.send('Update by ID API');
// });

//  Delete by ID Method
//  router.delete('/delete/:id', (req, res) => {
//      res.send('Delete by ID API');
//  });

 module.exports = router;
