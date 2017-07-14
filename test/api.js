const  assert = require('assert'),
  http = require('http');

describe('/', function () {
  it('API TEST', function (done) {
    http.get('http://localhost:3000', function (res) {
      assert.eq
      done();ual(200, res.statusCode);
    });
  });
});
