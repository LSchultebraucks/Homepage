let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
  title: { type: String, required: true },
  template: { type: mongoose.Schema.Types.Mixed, required: true }
});

module.exports = mongoose.model('file_test', schema);
