const express = require('express')
const router = express.Router()

let Post = require('../../models/post')

// Get posts from db
router.get('/', (req, res) => {
  Post.find()
    .exec((err, posts) => {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        })
      } else {
        res.status(201).json({
          message: 'Saved Post',
          obj: posts
        })
      }
    })
})

// Get posts from db
router.get('/:id', (req, res) => {
  console.log(req.params.id)
  Post.findById(req.params.id)
    .exec((err, post) => {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        })
      } else {
        res.status(201).json({
          message: 'Saved Post',
          obj: post
        })
      }
    })
})


/* Save post to db*/
router.post('/', (req, res) => {
  let post = new Post({
    content: req.body.content,
    author: req.body.author
  })
  console.log('MY POST:' + post)
  post.save((err, result) => {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      })
    } else {
      res.status(201).json({
        message: 'Saved Post',
        obj: result
      })
    }
  })
})

module.exports = router
