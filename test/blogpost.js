
const mongoose = require('mongoose');
const blogPost = require('../models/blogpost');

const chai = require('chai');
const server = require('../app');
const chaiHttp = require('chai-http');
const should = chai.should();
const assert = chai.assert;

chai.use(chaiHttp);

describe('/GET posts', () => {
  it('it should GET all the posts', (done) => {
    chai.request(server)
      .get('/blogpost')
      .end((err, res) => {
        assert(200, res.statusCode);
        assert("Success", res.message);
        done();
      });
  });
});

// describe('/', function () {
//   it('Get all Blogposts', function (done) {
//     http.get('URL', function(res) {
//       assert.equal(200 ,res.statusCode);
//       assert.equal("Success", res.message);
//     });
//     done();
//   });
// });
//
// describe('/', function () {
//   it('Post blogpost', function () {
//     let post = new blogPost({
//       title: "A title",
//       url : "url-test",
//       date: 99999999,
//       image: "image",
//       tags: ["Awesome", "Test"],
//       intro: "Some intro text about the blogpost",
//       template: "This is no template"
//     });
//     const body = JSON.stringify(post);
//     const options = {
//       method: "POST",
//       headers: {'Content-Type': 'application/json'}
//     };
//     http.post('URL' + body, options, res => {
//       assert.equal(200, res.statusCode);
//       assert.equal("Saved blogpost", res.message);
//       assert.equal(post, res.obj);
//     });
//     it('blogpost exists', function () {
//       http.get('URL' + '/url-test', res => {
//         assert.equal(200, res.statusCode);
//         assert.equal("Success", res.message);
//         assert.equal(post, res.obj);
//       });
//       it('Delete blogpost', function(done)  {
//       });
//     });
//   });
// });
