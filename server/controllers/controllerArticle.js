'use strict'
const Article = require('../models/Article');

module.exports = {

  findAll (req, res) {
    Article.find().populate('authorId')
    .then(articles => res.status(200).send({
      msg : 'find all data succeed',
      articles
    }))
    .catch(err => res.status(404).send(err))
  },

  create (req, res) {
    let objArticleCreate = {
      title     : req.body.title,
      authorId  : req.headers.authorid,
      content   : req.body.content
    }
    if (!req.body.title || !req.body.content) {
      return res.status(500).send({
        msg: 'article harus diisi'
      })
    }
    Article.create(objArticleCreate)
    .then(articleCreated => res.status(200).send({
      msg : 'create article succeed',
      articleCreated
    }))
    .catch(err => res.status(500).send(err))
  },

  comment (req, res) {

    console.log(req.body);

    Article.findOne({ '_id' : req.params.idArticle })
    .then(article => {
      let objArticleComment = {
        authorName : req.headers.authorid,
        body : req.body.body
      }
      article.comments.push(objArticleComment)
      article.save()
      .then(articleWrited => res.status(200).send({
        msg : 'comment article succeed',
        articleWrited
      }))
      .catch(err => res.status(500).send(err))
    })
    .catch(err => res.status(404).send(err))
  },

  destroy (req, res) {
    Article.remove({ '_id' : req.params.idArticle })
    .then(articleRemove => res.status(200).send({
      msg : 'remove article succeed',
      articleRemove
    }))
    .catch(err => res.status(500).send(err))
  },

  editArticle (req, res) {

    Article.find({ _id: req.body.id }, (err, data) => {
      data[0].title = req.body.title
      data[0].content = req.body.content
      data[0].save()
      res.status(201).json(data)
    })

  }
}
