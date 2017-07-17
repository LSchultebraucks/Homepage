'use strict';

const express = require('express');
const router = express.Router();

let blogPost = require('../../models/blogpost');

router.get('/', function (request, response, next) {
  blogPost.find()
    .populate()
    .exec((err, posts) => {
      if (err) {
        return response.status(500).json({
          title: 'Error while trying to fetch posts',
          error: err
        });
      }
      response.status(200).json({
        message: 'Sucess',
        obj: posts
      })
    });
});

router.get('/:url', function (request, response, next) {
  blogPost.findOne({url: request.params.url}, function (err, post) {
    if (err) {
      return response.status(500).json({
        title: 'An error occurred',
        error: err
      });
    } else {
      response.status(200).json({
        message: 'Success',
        obj: post
      })
    }
  });
});

router.post('/', function (request, response, next) {
  let post = new blogPost({
    title: request.body.title,
    url: request.body.url,
    date: request.body.date,
    image: request.body.image,
    tags: request.body.tags,
    intro: request.body.intro,
    template: request.body.template
  });
  post.save(function (err, result) {
    if (err) {
      return response.status(500).json({
        title: 'Error while trying to store blog post',
        error: err
      });
    }
    response.status(200).json({
      message: 'Saved blogPost',
      obj: result
    });
  });
});

// TODO: Does no work yet
router.put(':/url', function (request, response, next) {
  blogPost.findOne({url: request.params.url}, function (err, post) {
    if (err) {
      return response.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!post) {
      post = new blogPost({
        title: request.body.title,
        url: request.body.url,
        date: request.body.date,
        image: request.body.image,
        tags: request.body.tags,
        intro: request.body.intro,
        template: request.body.template
      });
      post.save(function (err, result) {
        if (err) {
          return response.status(500).json({
            title: 'Error while trying to store blog post',
            error: err
          });
        }
        return response.status(200).json({
          message: 'Saved blogPost',
          obj: result
        });
      });
    }
    blogPost.findById(post._id, function (err, post) {
      if (err) {
        return response.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      if (!post) {
        return response.status(500).json({
          title: 'No Post Found!',
          error: {message: 'Post not found'}
        });
      }
      post.title =  request.body.title;
      post.url = request.body.url;
      post.date = request.body.date;
      post.image = request.body.image;
      post.tags = request.body.tags;
      post.intro = request.body.intro;
      post.template = request.body.template;
      post.save(function (err, result) {
        if (err) {
          return response.status(500).json({
            title: 'Error while trying to store blog post',
            error: err
          });
        }
        response.status(200).json({
          message: 'Saved blogPost',
          obj: result
        });
      });
    });
  });
});

router.delete('/:url', function (request, response, next) {
  blogPost.findOne({url: request.params.url}, function (err, post) {
    if (err) {
      return response.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!post) {
      return response.status(500).json({
        title: 'No Post Found!',
        error: {message: 'Post not found'}

      });
    }
    post.remove(function (err, result) {
      if (err) {
        return response.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      response.status(200).json({
        message: 'Deleted Post',
        obj: result
      });
    });
  });
});

module.exports = router;
