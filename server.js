// Dependencies
// =============================================================
const express = require('express');
const mongoose = require("mongoose");

const routes = require("./routes");

require("dotenv").config();

// Sets up the Express App
// =============================================================
const app = express();

// Middleware
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the Express App - Static Assets
// =============================================================
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

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

// Server: Requires Routes
// =============================================================
app.use(routes);

// Server: Define Port
// =============================================================
const port = process.env.PORT || 5000;

// Server: Starts our Express Server
// =============================================================
app.listen(port, ()=> console.log(`Server started on port ${port}`));