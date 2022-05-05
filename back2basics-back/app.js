const mongoose = require('mongoose');
// const Widgets = require('./models/widgets');

//mongoDB connection
mongoose.connect('mongodb+srv://ProjectMicroService:hMZh2kgzdxXYuPd@cluster0.65kkj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });


// const setup
const express = require('express');
const app = express();
app.use(express.json());
const serviceRoutes = require('./routes/service');
const userRoutes = require('./routes/user');
const widgetRoutes = require('./routes/widget');


//middleware

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/services', serviceRoutes);
app.use('/api/users', userRoutes);
app.use('/api/widgets', widgetRoutes);


module.exports = app;
