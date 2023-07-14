require('dotenv').config()

const express = require('express')
const app = express()
const  mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const bookingRouter = require('./routes/booking')
app.use('/booking', bookingRouter)

const { Schema } = mongoose;

const bookingSchema = new Schema({
  barber: String,
  customer: String,
  apptype: String,
  date: Date,
});

const Booking = mongoose.model('booking', bookingSchema);

app.post('/api/bookings', (req, res) => {
    const bookingData = req.body;
  
    const newBooking = new Booking({
      barber: bookingData.barber,
      customer: bookingData.customer,
      apptype: bookingData.apptype,
      date: bookingData.date,
    });
  
    newBooking.save((err, savedBooking) => {
      if (err) {
        console.error('Error saving booking:', err);
        res.status(500).send('Error saving booking');
      } else {
        res.status(201).json(savedBooking);
      }
    });
  });

app.listen(3000, () => console.log('Server running on localhost:3000/booking'))