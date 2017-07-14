
const mongoose = require('mongoose');
const blogPost = require('../models/blogpost');

const chai = require('chai');
const server = require('../app');
const chaiHttp = require('chai-http');
const should = chai.should();
const assert = chai.assert;

chai.use(chaiHttp);

// Before for each, delete everything

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

describe('POST GET DELETE blogpost', () => {

  let testBlogPost = new blogPost({
    title: "A title",
    url: "url-test",
    date: 99999999,
    tags: ["Awesome", "Test"],
    intro: "Some intro text about the blogpost"
  });

  it('it should post a post', (done) => {
    chai.request(server)
      .post('/blogpost')
      .send(testBlogPost)
      .end((err, res) => {
        assert(200, res.statusCode);
        assert("Saved blogpost", res.message);
        assert(testBlogPost, res.obj);
      });
    done();
  });

  it('it should get the blogpost', (done) => {
    chai.request(server)
      .get('/blogpost/' + blogPost.url)
      .end((err, res) => {
        assert(200, res.statusCode);
        assert("Success", res.message);
        assert(testBlogPost, res.obj);
      });
    done();
  });

  it('it should delete the blogpost', (done) => {
    chai.request(server)
      .delete('/blogpost/' + blogPost.url)
      .end((err, res) => {
        assert(200, res.statusCode);
        assert("Deleted blogpost", res.message);
        assert(testBlogPost, res.obj);
      });
    done();
  });
});


// After All - Nothing should be here anymore
