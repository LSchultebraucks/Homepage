let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  date:  { type: Date, default: Date.now },
  image: { type: Schema.Types.ObjectId, ref: "fs.files", required: true }, // GRIDFS
  tags:  [{type: String, required: true}],
  intro: { type: String, required: true },
  // SOME HTML TEMPLATE WITH PICS ALL SAVED IN GRIDFS
  template: { type: Schema.Types.ObjectId, ref: "fs.files", required: true }
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('blogpost', schema);
