"use strict";

// Environment settings
require('dotenv').config();

// Import modules
const express = require('express');
const ejs = require('ejs');

// Instantiate imported modules
const app = express();

// Middlewares
app.use(express.static('public'));

// Set templating engine
app.set('view engine', 'ejs');
app.set('views', './resources/views/content');

// Export app
module.exports = app;
