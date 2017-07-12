const assert = require('assert');
const chai = require('chai');
const request = require('request');

const blogPost = require('../models/blogpost');

const URL = "http://localhost:3000/blogpost";

describe('/', function () {
  it('Get all Blogposts', function () {
    request.get('URL', function(res) {
      assert.equal(200 ,res.statusCode);
      assert.equal("Success", res.message);
    });
    done();
  });
});

describe('/', function () {
  it('Post blogpost', function () {
    let post = new blogPost({
      title: "A title",
      url : "url-test",
      date: 99999999,
      image: "image",
      tags: ["Awesome", "Test"],
      intro: "Some intro text about the blogpost",
      template: "This is no template"
    });
    const body = JSON.stringify(post);
    const options = {
      method: "POST",
      headers: {'Content-Type': 'application/json'}
    };
    request.post('URL' + body, options, res => {
      assert.equal(200, res.statusCode);
      assert.equal("Saved blogpost", res.message);
      assert.equal(post, res.obj);
    });
    it('blogpost exists', function () {
      request.get('URL' + '/url-test', res => {
        assert.equal(200, res.statusCode);
        assert.equal("Success", res.message);
        assert.equal(post, res.obj);
      });
      it('Delete blogpost', function()  {
      });
    });
  });
});
