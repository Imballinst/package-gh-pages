"use strict";

// Import modules
const fs = require('fs');
const app = require('../../app/app.js');

// Socket io
const http = require('http');
const server = http.Server(app);

// Read manifest
const isProd = (process.env.NODE_ENV !== 'local');
if (isProd) {
  const manifest = JSON.parse(fs.readFileSync('./public/assets/manifest.json', 'utf8'));
}

// Routes
app.get('/', function (req, res) {
  // handle every missing route on react-router
  res.render('index', {
    pageTitle: 'React Bootstrap Datatable',
    nodeEnv: process.env.NODE_ENV,
    manifestCss: isProd ? './assets/' + manifest['index.css'] : './assets/index.css',
    manifestApp: isProd ? './assets/' + manifest['index.js'] : './assets/index.js',
    manifestVendor: isProd ? './assets/' + manifest['vendor.js'] : './assets/vendor.js'
  });
});

// Request handler
app.use(function (err, req, res, next) {
  console.error(err.stack);

  res.status(500).send('Something broke!');
});

// Port listen
server.listen(3003, function () {
  console.log('Listening on port 3003!');
});
