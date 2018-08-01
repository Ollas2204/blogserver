'use strict'

var   chai      = require('chai'),
      chaiHttp  = require('chai-http'),
      app       = require('../app'),
      should    = chai.should(),
      expect    = chai.expect

chai.use(chaiHttp)

let authorid = ''
let articleId = ''
let email = 'olla'
let password = 'olla'
let token = ''

describe('POST /authors/signin', () => {
  it('should return a token author', done => {
    chai.request(app)
      .post('/authors/signin')
      .send({
        email : email, //test login email
        password : password//test login password
      })
      .end((err, res) => {
        // console.log(res.body)
        token = res.body.token
        authorid = res.body.idUser
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.req._hasBody)
        expect(res.body).to.have.property('msg')
        expect(res.body).to.have.property('token')
        expect(res.body).to.have.property('isAdmin')
        expect(res.body.msg).to.be.a('string')
        expect(res.body.token).to.be.a('string')
        expect(res.body.isAdmin).to.be.a('boolean')
        expect(res.body.isAdmin).to.equal(false);
        // (res.body).should.have.property('message')
        done()
      })
  })
})

describe('GET /articles', () => {
  it('should return data of articles', done => {
    chai.request(app)
      .get('/articles')
      .set('token', token)
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.req._hasBody)
        expect(res.body).to.have.property('msg')
        expect(res.body).to.have.property('articles')
        expect(res.body.msg).to.be.a('string')
        expect(res.body.articles).to.be.a('array')
        done()
      })
  })
})

describe('POST /articles', () => {
  it('should return data of created articles', done => {
    chai.request(app)
      .post('/articles')
      .set('token', token)
      .set('authorid', authorid)
      .send({
        title   : 'BLOG BARUU',
        content : 'blog baruku gimana nih oke gak?'
      })
      .end((err, res) => {
        articleId = res.body.articleCreated._id
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.req._hasBody)
        expect(res.body).to.have.property('msg')
        expect(res.body).to.have.property('articleCreated')
        expect(res.body.msg).to.be.a('string')
        expect(res.body.articleCreated).to.be.a('object')
        done()
      })
  })
})

describe('PUT /articles/:idArticle/comment', () => {
  it('should return data of commented articles', done => {
    chai.request(app)
      .put(`/articles/${articleId}/comment`)
      .set('token', token)
      .set('authorid', authorid)
      .send({
        body : 'mantap jiwaaaa kau fuadiaaa'
      })
      .end((err, res) => {
        console.log(res.body);
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.req._hasBody)
        expect(res.body).to.have.property('msg')
        expect(res.body).to.have.property('articleWrited')
        expect(res.body.msg).to.be.a('string')
        expect(res.body.articleWrited).to.be.a('object')
        done()
      })
  })
})

describe('DELETE /articles/:idArticle/delete', () => {
  it('should return data of deleted article', done => {
    chai.request(app)
      .delete(`/articles/${articleId}/delete`)
      .set('token', token)
      .end((err, res) => {
        console.log(res.body);
        console.log(err)
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.req._hasBody)
        expect(res.body).to.have.property('msg')
        expect(res.body).to.have.property('articleRemove')
        expect(res.body.msg).to.be.a('string')
        expect(res.body.articleRemove).to.be.a('object')
        done()
      })
  })
})
