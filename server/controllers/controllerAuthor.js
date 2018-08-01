'use strict'
const jwt = require('jsonwebtoken');
const Author = require('../models/Author');
const Article = require('../models/Article');

require('dotenv').config()

module.exports = {

  findAll (req, res) {
    Author.find()
    .then(authors => res.status(200).send({
      msg : 'find all authors succeed',
      authors
    }))
    .catch(err => res.status(404).send(err))
  },

  signUp (req, res) {
    let objAuthorCreate
    if (req.body.role) {
      objAuthorCreate = {
        fullName  : req.body.fullName,
        email     : req.body.email,
        password  : req.body.password,
      }
    } else {
      objAuthorCreate = {
        fullName  : req.body.fullName,
        email     : req.body.email,
        password  : req.body.password,
      }
    }
    console.log(objAuthorCreate);
    Author.create(objAuthorCreate)
    .then(authorCreated => res.status(200).send({
      msg : 'create author succeed',
      authorCreated
    }))
    .catch(err => res.status(500).send(err))
  },

  signIn (req, res) {
    Author.findOne({
      'email' : req.body.email
    })
    .then(dataAuthor => {
      if (dataAuthor) {
        if (dataAuthor.password == req.body.password) {
          jwt.sign({ data : dataAuthor}, 'SECRETKEY', (err, token) => {
            if (!err && token) {
              return res.status(200).send({
                msg         : 'Login is success',
                token,
                isAdmin     : false,
                idUser      : dataAuthor._id,
                nameUser    : dataAuthor.fullName
              })
            } else {
              return console.log(err);
            }
          })
        } else {
          return res.status(500).send({
            msg : 'Wrong password'
          })
        }
      } else {
        return res.status(500).send({
          msg : 'Cannot find author'
        })
      }
    })
    .catch(err => res.status(404).send({
      msg : 'Cannot get author',
      err
    }))
  },

  deleteAuthor (req, res) {
    Author.remove({
      '_id' : req.params.id
    })
      .then(deleteReport => {
        Article.remove({
          'authorId': req.params.id
        })
          .then(deleteArticle => res.status(200).send({
            msg : 'delete success',
            deleteArticle,
            deleteReport
          }))
          .catch(err => res.status(500).send(err))
      })
      .catch(err => res.status(500).send(err))
  }
}
