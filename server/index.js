const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');
const fake = require('./fkdb');

const rentalRoutes = require('./routes/rentals'),
      userRoutes = require('./routes/users');

mongoose.connect(config.DB_URL).then(()=>{
  const fakeDB = new fake();
  fakeDB.seedDB(); 
});

const app = express();
app.use(bodyParser.json());

app.use('/api/v1/rentals', rentalRoutes);//middlewares

app.use('/api/v1/users', userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, function(){
  console.log("Server is running");
});