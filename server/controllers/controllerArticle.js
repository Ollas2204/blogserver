'use strict'
const Article = require('../models/Article');

module.exports = class ControllerArticle {
  constructor() {

  }

  static findAll (req, res) {
    Article.find().populate('authorId')
    .then(articles => res.status(200).send({
      msg : 'find all data succeed',
      articles
    }))
    .catch(err => res.status(404).send(err))
  }

  static create (req, res) {
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
  }

  static comment (req, res) {
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
  }

  static destroy (req, res) {
    Article.remove({ '_id' : req.params.idArticle })
    .then(articleRemove => res.status(200).send({
      msg : 'remove article succeed',
      articleRemove
    }))
    .catch(err => res.status(500).send(err))
  }

  static editArticle (req, res) {
    if (!req.body.title || !req.body.content) {
      return res.status(500).send({
        msg: 'article harus diisi'
      })
    }
    Article.findOne({
      '_id': req.params.idArticle,
      'authorId': req.headers.authorid
    })
      .then(article => {
        Article.update({
          '_id': req.params.idArticle
        }, {
          'title': req.body.title,
          'content': req.body.content
        })
          .then(editing => {
            Article.findOne({
              '_id': req.params.idArticle
            })
            .populate('authorId')
              .then(articleEdit => res.status(200).send({
                msg: 'edit article success',
                articleEdit
              }))
              .catch(err => res.status(500).send(err))
          })
          .catch(err => res.status(500).send(err))
      })
      .catch(err => {
        res.status(500).send(err)
      })
  }
}
