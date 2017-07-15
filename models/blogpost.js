let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true, unique: true },
  date:  { type: Date, default: Date.now, required: true },
  tags:  [{type: String, required: true}],
  intro: { type: String, required: true },
  image: { type: mongoose.Schema.Types.Mixed }, // GRIDFS
  // SOME HTML TEMPLATE WITH PICS ALL SAVED IN GRIDFS
  template: { type: mongoose.Schema.Types.Mixed },
});

module.exports = mongoose.model('blogpost', schema);
