require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

mongoose
    .connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database Connected');
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB:', error);
    });

const database = mongoose.connection;
database.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const appointmentRouter = require('./router/appointment-router');
app.use('/api', appointmentRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`);
});
