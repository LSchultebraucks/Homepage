'use strict';

const express = require('express');
const router = express.Router();

let blogPost = require('../../models/blogpost');

router.get('/', function (req, res, next) {
  blogPost.find()
    .populate()
    .exec((err, posts) => {
      if (err) {
        return res.status(500).json({
          title: 'Error while trying to fetch posts',
          error: err
        });
      }
      res.status(200).json({
        message: 'Sucess',
        obj: posts
      })
    });
});

router.get('/:url', function (req, res, next) {
  blogPost.findOne({url: req.params.url}, function (err, post) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Success',
        obj: post
      })
    }
  });
});

router.post('/', function (req, res, next) {
  let post = new blogPost({
    title: req.body.title,
    url: req.body.url,
    date: req.body.date,
    image: req.body.image,
    tags: req.body.tags,
    intro: req.body.intro,
    template: req.body.template
  });
  post.save(function (err, result) {
    if (err) {
      return res.status(500).json({
        title: 'Error while trying to store blog post',
        error: err
      });
    }
    res.status(200).json({
      message: 'Saved blogpost',
      obj: result
    });
  });
});

// TODO: Does no work yet
router.put(':/url', function (req, res, next) {
  blogPost.findOne({url: req.params.url}, function (err, post) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!post) {
      post = new blogPost({
        title: req.body.title,
        url: req.body.url,
        date: req.body.date,
        image: req.body.image,
        tags: req.body.tags,
        intro: req.body.intro,
        template: req.body.template
      });
      post.save(function (err, result) {
        if (err) {
          return res.status(500).json({
            title: 'Error while trying to store blog post',
            error: err
          });
        }
        return res.status(200).json({
          message: 'Saved blogpost',
          obj: result
        });
      });
    }
    blogPost.findById(post._id, function (err, post) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      if (!post) {
        return res.status(500).json({
          title: 'No Post Found!',
          error: {message: 'Post not found'}
        });
      }
      post.title =  req.body.title;
      post.url = req.body.url;
      post.date = req.body.date;
      post.image = req.body.image;
      post.tags = req.body.tags;
      post.intro = req.body.intro;
      post.template = req.body.template;
      post.save(function (err, result) {
        if (err) {
          return res.status(500).json({
            title: 'Error while trying to store blog post',
            error: err
          });
        }
        res.status(200).json({
          message: 'Saved blogpost',
          obj: result
        });
      });
    });
  });
});

router.delete('/:url', function (req, res, next) {
  console.log(req);
  blogPost.findOne({url: req.params.url}, function (err, post) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!post) {
      return res.status(500).json({
        title: 'No Post Found!',
        error: {message: 'Post not found'}
      });
    }
    post.remove(function (err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Deleted Post',
        obj: result
      });
    });
  });
});

module.exports = router;
