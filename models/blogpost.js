var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  date:  { type: Date, default: Date.now },
  image: { type: Schema.Types.ObjectId, ref: "fs.files", required: true }, // GRIDFS
  tags:  [{type: String, required: true}],
  intro: { type: String, required: true }
  // SOME HTML TEMPLATE WITH PICS ALL SAVED IN GRIDFS
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('blogpost', schema);
