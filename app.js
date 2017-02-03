"use strict";

// Import modules
const express = require('express');

// Instantiate imported modules
const app = express();

// Middlewares
app.use(express.static('public'));

// Error handlers

// Set templating engine
app.set('view engine', 'ejs');
app.set('views', './views/content');

// Export app
module.exports = app;
