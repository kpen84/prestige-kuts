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

});

//updating one
router.patch('/:id', (req, res) => {

});

//delete one
router.delete('/:id', (req, res) => {

});


module.exports = router;