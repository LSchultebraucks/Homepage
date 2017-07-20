let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true, unique: true },
  date:  { type: Number, required: true },
  intro: { type: String, required: true },
  tags:  [{type: String, required: true}],
  image: { type: String, required: true },
  template: { type: String, required: true },
});

module.exports = mongoose.model('blogpost', schema);
