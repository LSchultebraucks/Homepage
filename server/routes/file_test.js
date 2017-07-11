
const router = require('express').Router();
const config = require('../../config/config');
const mongoose = require("mongoose");
const fs = require("fs");

let Grid = require("gridfs-stream");
let conn = mongoose.connection;
Grid.mongo = mongoose.mongo;
let gfs;

let fileTest = require("../../models/file_test");

conn.once("open", ()=> {
  gfs = Grid(conn.db);

  router.get('/', (req, res) => {
    res.send('file_test works');
  });

  router.post('/', (req, res, next) => {
    let part = req.files.file;
    let mimType = part.mimetype;
    let writeStream = gfs.createWriteStream({
      filename: `${req.body.rid}_translated`,
      mode: 'w',
      content_type: mimType.mime
    });
    writeStream.on('close', function (d) {
      let doc = {
        id: d._id,
        length: d.length,
        name: d.filename,
        type: d.contentType,
        link: `https://${req.headers.host}/api/resource/reviewdoc/${d._id}`
      };
      /*
       * Then save here the doc object in your schema.
       *  In your schema you want to change the 'saved_file' type to:
       *  mongoose.Schema.Types.Mixed
       */
      let file = new fileTest({
        title: req.body.template,
        template: doc.name
      });
      file.save(function (err, result) {
        if (err) {
          return res.status(500).json({
            title: 'An error occurred',
            error: err
          });
        } else {
          return res.status(200).json({
            message: "Saved file object",
            obj: result
          });
        }
      });
    });
    writeStream.write(part.data);
    writeStream.end();
  });

    router.get('/:id', function (req, res, next) {
    fileTest.findOne({_id: req.params.id}, function (err, fileT) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Success',
          obj: fileT
        })
      }
    });
  });
});

module.exports = router;
