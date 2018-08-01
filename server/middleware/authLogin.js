'use strict'

const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = class AuthLogin {
  constructor() {

  }

  static authLogin (req, res, next) {
    if(req.headers.name){
      req.headers.authorid = req.headers.name
      return next()
    }
    if(req.headers.token !== 'null'){
      jwt.verify(req.headers.token, 'SECRETKEY', (err, decoded) => {
        if (err) {
          res.status(403).send(err)
        } else {
          req.headers.authorid = decoded.data._id
          next()
        }
      })
    }
  }
}
