// Dependencies
// =============================================================
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

// Sets up the Express App
// =============================================================
const app = express();

// Bodyparser: Bodyparser Middleware
// =============================================================
app.use(bodyParser.json());


// DB: Config
// =============================================================
const mongodb = require('./config/config').MONGODB_URI;

// DB: Require Models
// =============================================================
const db = ('./models/book');

// Mongoose: Connect to MongoDB
// =============================================================
mongoose
.connect(mongodb,{ useNewUrlParser: true, useFindAndModify: false })
.then(()=> console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Server: Requires the api-Routes
// =============================================================
app.use('/api', require('./routes/apiRoutes'));


// Server: Define Port
// =============================================================
const port = process.env.PORT || 5000;

// Server: Starts our Express Server
// =============================================================
app.listen(port, ()=> console.log(`Server started on port ${port}`));