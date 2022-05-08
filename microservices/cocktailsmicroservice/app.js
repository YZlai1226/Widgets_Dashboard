const express = require('express');
const axios = require('axios')
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/drinks', (req, res, next) => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((data) => res.status(200).json(data.data));
})

module.exports = app;