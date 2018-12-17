const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const rentalRoutes = require('./routes/rentals');
const fake = require('./fkdb');

mongoose.connect(config.DB_URL).then(()=>{
  const fakeDB = new fake();
  fakeDB.seedDB(); 
});

const app = express();

app.use('/api/v1/rentals', rentalRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, function(){
  console.log("Server is running");
});