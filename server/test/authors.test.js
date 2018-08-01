'use strict'

var   chai      = require('chai'),
      chaiHttp  = require('chai-http'),
      app       = require('../app'),
      should    = chai.should(),
      expect    = chai.expect

chai.use(chaiHttp)

//first you need to open this described comment first to sign up authors

// describe('POST /authors/signup', () => {
//   it('should return data created of author', done => {
//     chai.request(app)
//     .post('/authors/signup')
//     .send({
//       email : , // test email
//       password : // test password
//     })
//     .end((err, res) => {
//       console.log(res.body);
//       expect(err).to.be.null
//       expect(res).to.have.status(200)
//       expect(res.req._hasBody)
//       expect(res.body).to.have.property('msg')
//       expect(res.body).to.have.property('authorCreated')
//       expect(res.body.msg).to.be.a('string')
//       expect(res.body.authorCreated).to.be.a('object')
//       done()
//     })
//   })
// })

//open the comment, get your tested token in your console here and then comment this describe POST/authors/signin

// describe('POST /authors/signin', () => {
//   it('should return a token author', done => {
//     chai.request(app)
//       .post('/authors/signin')
//       .send({
//         email : , //test login email
//         password : //test login password
//       })
//       .end((err, res) => {
//         // console.log(res.body)
//         console.log(res.body.token)
//         expect(err).to.be.null
//         expect(res).to.have.status(200)
//         expect(res.req._hasBody)
//         expect(res.body).to.have.property('msg')
//         expect(res.body).to.have.property('token')
//         expect(res.body).to.have.property('isAdmin')
//         expect(res.body.msg).to.be.a('string')
//         expect(res.body.token).to.be.a('string')
//         expect(res.body.isAdmin).to.be.a('boolean')
//         expect(res.body.isAdmin).to.equal(false);
//         // (res.body).should.have.property('message')
//         done()
//       })
//   })
// })

// describe('GET /authors', () => {
//   it('should return data of authors', done => {
//     chai.request(app)
//       .get('/authors')
//       .set('token', <your token>)
//       .end((err, res) => {
//         expect(err).to.be.null
//         expect(res).to.have.status(200)
//         expect(res.req._hasBody)
//         expect(res.body).to.have.property('msg')
//         expect(res.body).to.have.property('authors')
//         expect(res.body.msg).to.be.a('string')
//         expect(res.body.authors).to.be.a('array')
//         done()
//       })
//   })
// })
