module.exports = {
  dev: {
    port: process.env.port || 3000,
    db  : process.env.DB_LINK || 'mongodb://lschultebraucks:thelord234@ds127153.mlab.com:27153/homepage'
  },
  prod: {
    // TODO
  }
};
