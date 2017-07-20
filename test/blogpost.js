
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

describe('POST GET DELETE blogPost', () => {

  let testBlogPost = new blogPost({
    title: "A title",
    url: "url-test3",
    date: 99999999,
    intro: "Some intro text about the blogPost",
    tags: ["Awesome", "Test"],
    image: "https://image.jimcdn.com/app/cms/image/transf/dimension=395x1024:format=jpg/path/s18122fe3bc485736/image/i3e461dc332e482d6/version/1497724120/image.jpg",
    template: "<h1>This is h1</h1>"
  });

  it('it should post a post', (done) => {
    chai.request(server)
      .post('/blogpost')
      .send(testBlogPost)
      .end((err, res) => {
        assert(200, res.statusCode);
        assert("Saved blogPost", res.message);
        assert(testBlogPost, res.obj);
      });
    done();
  });

  it('it should get the blogPost', (done) => {
    chai.request(server)
      .get('/blogpost/' + blogPost.url)
      .end((err, res) => {
        assert(200, res.statusCode);
        assert("Success", res.message);
        assert(testBlogPost, res.obj);
      });
    done();
  });

  it('it should delete the blogPost', (done) => {
    chai.request(server)
      .delete('/blogpost/' + blogPost.url)
      .end((err, res) => {
        assert(200, res.statusCode);
        assert("Deleted blogPost", res.message);
        assert(testBlogPost, res.obj);
      });
    done();
  });
});


// After All - Nothing should be here anymore
