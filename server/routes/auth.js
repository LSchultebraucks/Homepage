'use strict';

const express = require('express');
const router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const pasw = '$2y$10$7ipsfpl4NQfqFD/DAELLhe39d5kVI03jOiCQ2jeR6PwlHn/PBJGuq';

router.post('/', function (request, response, next) {
  if (bcrypt.compareSync(request.body.password, pasw)) {
    let token = jwt.sign('logged in', 'sth', { expressIn: 7200 });
    return response.status(200).json({
      message: "Successfully logged in",
      lsblogtoken: token
    });
  } else {
    return response.status(401).json({
      title: 'Login failed',
      error: {message: 'Invalid login credentials'}
    });
  }
});

module.exports = router;
