const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

// =================== GET CITY NAME =======================
app.get('/api/city/:lat/:lon', (req, res, next) => {
  const lat = req.params.lat
  const lon = req.params.lon
  axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=a0eae4a3de90f7e4b2a15fb25efa3def`)
    .then(result => {
      res.status(200).json(result.data);
    })
    .catch(err => {
      console.error(err.message, 'GET CITY (back)')
    })
})

// ================== GET CURRENT WEATHER =====================
app.get('/api/weather/:lat/:lon', (req, res, next) => {
  const lat = req.params.lat
  const lon = req.params.lon
  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=a0eae4a3de90f7e4b2a15fb25efa3def`)
    .then(result => {
      res.status(200).json(result.data);
    })
    .catch(err => {
      console.error(err.message, 'GET WEITHER (back)')
    })
})

// =============== GET HOURLY FORECAST WEATHER =================
app.get('/api/forecast/:lat/:lon', (req, res, next) => {
  const lat = req.params.lat
  const lon = req.params.lon
  axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely&units=metric&appid=a0eae4a3de90f7e4b2a15fb25efa3def`)
    .then(result => {
      res.status(200).json(result.data);
    })
    .catch(err => {
      console.error(err.message, 'GET FORECAST (back)')
    })
})

module.exports = app;