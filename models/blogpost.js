let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true, unique: true },
  date:  { type: Date, default: Date.now },
  image: { type: String, required: true }, // GRIDFS
  tags:  [{type: String, required: true}],
  intro: { type: String, required: true },
  // SOME HTML TEMPLATE WITH PICS ALL SAVED IN GRIDFS
  template: { type: String, required: true }
});

module.exports = mongoose.model('blogpost', schema);
