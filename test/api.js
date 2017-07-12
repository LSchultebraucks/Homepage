const  assert = require('assert'),
  http = require('http');

describe('/', function () {
  it('API TEST', function (done) {
    http.get('http://localhost:3000', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
