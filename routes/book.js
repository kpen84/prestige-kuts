const express = require('express');
const router = express.Router();


//geting all
router.get('/', (req, res) => {
    res.send('Hello World');
});

//getting one
router.get('/:id', (req, res) => {

});

//creating one
router.post('/', (req, res) => {
    const { barber, customer, apptype, email, date } = req.body;
    // Process the form data as per your requirements
    // For example, you can store the data in a database, send emails, etc.
  
    // Send a response to the client
    res.send('Form submitted successfully!');
});

//updating one
router.patch('/:id', (req, res) => {

});

//delete one
router.delete('/:id', (req, res) => {

});


module.exports = router;