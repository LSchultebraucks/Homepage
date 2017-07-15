"use strict";

const logger = require('morgan');
const bodyParser = require('body-parser');
const busboyBodyParser = require('busboy-body-parser');
const express = require('express');
const path = require('path');

module.exports = (app) => {
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS');
    next();
  });
  app.use(busboyBodyParser({ limit: '10mb' }));

  // Get API routes
  const imageRoutes = require('../server/routes/image');
  const blogPostRoutes = require('../server/routes/blogpost');
  const fileTestRoutes = require('../server/routes/file_test');

  // Set api routes
  app.use('/image', imageRoutes);
  app.use('/blogpost', blogPostRoutes);
  app.use('/file', fileTestRoutes);

  // Redirection to default Angular App
  app.use(express.static(path.join(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });

};
