const express = require('express'); 

const axios = require('axios') 

const cors = require('cors'); 


const app = express(); 

app.use(cors());

app.get('/api/techNewsFR', (req, res, next) => { 
    axios.get('https://newsapi.org/v2/top-headlines?category=technology&country=fr&apiKey=f223f6b603bd4dbbab8fc6dd5633d9da')
         .then((data) => res.status(200).json(data.data));
        // res.json({ message: 'Your request was successful!' });

}) 

app.get('/api/healthNewsFR', (req, res, next) => { 
    axios.get('https://newsapi.org/v2/top-headlines?category=health&country=fr&apiKey=f223f6b603bd4dbbab8fc6dd5633d9da') 
    .then((data) => res.status(200).json(data.data));
    
})
 

module.exports = app; 