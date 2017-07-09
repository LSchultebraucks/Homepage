"use strict";

const logger = require('morgan');
const bodyParser = require('busboy-body-parser');
const express = require('express');
const path = require('path');

module.exports = (app) => {
  app.use(logger('dev'));
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  app.use(bodyParser({ limit: '10mb' }));


   // Get our API routes
  const apiRoutes = require('../server/routes/api');
  const imageRoutes = require('../server/routes/image');

  // Set our api routes
  app.use('/api', apiRoutes);
  app.use('/image', imageRoutes);


  app.use(express.static(path.join(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });

};
