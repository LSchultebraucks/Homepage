const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const fs = require('fs');

let Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
let gfs;


router.get('/', (req, res) => {
  res.send('image works');
});

router.post('/img', (req, res) => {
  let file = req.files.file;
  let writeStream = gfs
});


module.exports = router;
