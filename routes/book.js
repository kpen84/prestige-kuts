const express = require('express');
const router = express.Router();

//geting all
router.get('/', (req, res) => {
    res.send('Hello World');
});

//getting one
router.get('/:id', (req, res) => {});

//creating one
router.post('/', async (req, res) => {
    const { barber, customer, apptype, email, date } = req.body;
    try {
        const dataToSave = await data.save();
        res.redirect('/confirmed.html'); // Redirect to the "confirmed.html" page
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

    // Send a response to the client
    res.send('Form submitted successfully!');
});

//updating one
router.patch('/:id', (req, res) => {});

//delete one
router.delete('/:id', (req, res) => {});

module.exports = router;
