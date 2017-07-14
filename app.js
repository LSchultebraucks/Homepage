'use strict';

const app = require('express')(),
  config = require('./config/config');

//Express conf !
require('./config/express.config')(app);

//Mongoose Conf !
require('./config/mongoose.config')(config);

if(!module.parent) {
  app.listen(config.dev.port, () => {
    console.log("Listening ..");
  })
}

module.exports = app;
