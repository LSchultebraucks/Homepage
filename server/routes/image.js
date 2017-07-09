'use strict';

const router = require('express').Router();
const config = require('../../config/config');
const mongoose = require("mongoose");
const fs = require("fs");

let Grid = require("gridfs-stream");
let conn = mongoose.connection;
Grid.mongo = mongoose.mongo;
let gfs;


conn.once("open", ()=>{
  gfs = Grid(conn.db);
  router.get('/', (req, res) => {
    res.send('image works');
  });

  router.post('/img', (req, res) => {
    let file = req.files.file;
    let writeStream = gfs
  });
});


module.exports = router;
