require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static('public'));
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error);
});
database.once('connected', () => {
    console.log('Database Connected');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/book.html');
});

//router

const appointmentRouter = require('./router/appointment-book');
app.use('/', appointmentRouter);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
});
