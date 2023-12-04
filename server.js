require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));







const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`);
});
