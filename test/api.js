const  assert = require('assert'),
  http = require('http');

describe('/', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:3000', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });

  it(function (done) {
    http.get('http://localhost:3000/api', function (res) {
      let  data = '';

      res.on('data', function (chunk) {
        data += chunk;
      });

      res.on('end', function () {
        assert.equal('api works!', data);
        done();
      });
    });
  });
});
