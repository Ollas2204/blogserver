'use strict'

var   chai      = require('chai'),
      chaiHttp  = require('chai-http'),
      app       = require('../app'),
      should    = chai.should(),
      expect    = chai.expect

chai.use(chaiHttp)

// describe('GET /articles', () => {
//   it('should return data of articles', done => {
//     chai.request(app)
//       .get('/articles')
//       .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InJvbGUiOiJ1c2VyIiwiX2lkIjoiNWE4YWE1YzAwYzQ2ODAxYjliZjBjYzA0IiwiZW1haWwiOiJmdWFkaUBtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzIiwiY3JlYXRlZEF0IjoiMjAxOC0wMi0xOVQxMDoyNDowMC43MjVaIiwidXBkYXRlZEF0IjoiMjAxOC0wMi0xOVQxMDoyNDowMC43MjVaIiwiX192IjowfSwiaWF0IjoxNTE5MDQ2NTIzfQ.TTpiCnEj_gVbH5jvKllROxCRhBfW09O39w8VypyxiuU')
//       .end((err, res) => {
//         expect(err).to.be.null
//         expect(res).to.have.status(200)
//         expect(res.req._hasBody)
//         expect(res.body).to.have.property('msg')
//         expect(res.body).to.have.property('articles')
//         expect(res.body.msg).to.be.a('string')
//         expect(res.body.articles).to.be.a('array')
//         done()
//       })
//   })
// })

// describe('POST /articles', () => {
//   it('should return data of created articles', done => {
//     chai.request(app)
//       .post('/articles')
//       .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InJvbGUiOiJ1c2VyIiwiX2lkIjoiNWE4YWE1YzAwYzQ2ODAxYjliZjBjYzA0IiwiZW1haWwiOiJmdWFkaUBtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzIiwiY3JlYXRlZEF0IjoiMjAxOC0wMi0xOVQxMDoyNDowMC43MjVaIiwidXBkYXRlZEF0IjoiMjAxOC0wMi0xOVQxMDoyNDowMC43MjVaIiwiX192IjowfSwiaWF0IjoxNTE5MDQ2NTIzfQ.TTpiCnEj_gVbH5jvKllROxCRhBfW09O39w8VypyxiuU')
//       .set('authorid', '5a8aa5c00c46801b9bf0cc04')
//       .send({
//         title   : 'BLOG BARUU',
//         content : 'blog baruku gimana nih oke gak?'
//       })
//       .end((err, res) => {
//         console.log(res.body);
//         expect(err).to.be.null
//         expect(res).to.have.status(200)
//         expect(res.req._hasBody)
//         expect(res.body).to.have.property('msg')
//         expect(res.body).to.have.property('articleCreated')
//         expect(res.body.msg).to.be.a('string')
//         expect(res.body.articleCreated).to.be.a('object')
//         done()
//       })
//   })
// })

// describe('PUT /articles/:idArticle/comment', () => {
//   it('should return data of commented articles', done => {
//     chai.request(app)
//       .put('/articles/5a8ad383ed8111248e4aabb1/comment')
//       .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InJvbGUiOiJ1c2VyIiwiX2lkIjoiNWE4YWE1YzAwYzQ2ODAxYjliZjBjYzA0IiwiZW1haWwiOiJmdWFkaUBtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzIiwiY3JlYXRlZEF0IjoiMjAxOC0wMi0xOVQxMDoyNDowMC43MjVaIiwidXBkYXRlZEF0IjoiMjAxOC0wMi0xOVQxMDoyNDowMC43MjVaIiwiX192IjowfSwiaWF0IjoxNTE5MDQ2NTIzfQ.TTpiCnEj_gVbH5jvKllROxCRhBfW09O39w8VypyxiuU')
//       .set('authorid', '5a8aa5c00c46801b9bf0cc04')
//       .send({
//         body : 'mantap jiwaaaa kau fuadiaaa'
//       })
//       .end((err, res) => {
//         console.log(res.body);
//         expect(err).to.be.null
//         expect(res).to.have.status(200)
//         expect(res.req._hasBody)
//         expect(res.body).to.have.property('msg')
//         expect(res.body).to.have.property('articleWrited')
//         expect(res.body.msg).to.be.a('string')
//         expect(res.body.articleWrited).to.be.a('object')
//         done()
//       })
//   })
// })

// describe('PUT /articles/:idArticle/like', () => {
//   it('should return data of liked articles', done => {
//     chai.request(app)
//       .put('/articles/5a8ad383ed8111248e4aabb1/like')
//       .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InJvbGUiOiJ1c2VyIiwiX2lkIjoiNWE4YWQxODU2ZmY5ZDYyNDI0YWNlYTA4IiwiZW1haWwiOiJhbGFhQG1haWwuY29tIiwicGFzc3dvcmQiOiIxMjMiLCJjcmVhdGVkQXQiOiIyMDE4LTAyLTE5VDEzOjMwOjQ1LjQ5MFoiLCJ1cGRhdGVkQXQiOiIyMDE4LTAyLTE5VDEzOjMwOjQ1LjQ5MFoiLCJfX3YiOjB9LCJpYXQiOjE1MTkwNDg1NzJ9.Lyns3QtTh2Yhq7ANwUXMlRSOmeqbWu8SDcANxcY9JAQ')
//       .end((err, res) => {
//         console.log(res.body);
//         console.log(err)
//         expect(err).to.be.null
//         expect(res).to.have.status(200)
//         expect(res.req._hasBody)
//         expect(res.body).to.have.property('msg')
//         expect(res.body).to.have.property('articleWrited')
//         expect(res.body.msg).to.be.a('string')
//         expect(res.body.articleWrited).to.be.a('object')
//         done()
//       })
//   })
// })

// describe('DELETE /articles/:idArticle/delete', () => {
//   it('should return data of deleted article', done => {
//     chai.request(app)
//       .delete('/articles/5a8ad383ed8111248e4aabb1/delete')
//       .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InJvbGUiOiJ1c2VyIiwiX2lkIjoiNWE4YWQxODU2ZmY5ZDYyNDI0YWNlYTA4IiwiZW1haWwiOiJhbGFhQG1haWwuY29tIiwicGFzc3dvcmQiOiIxMjMiLCJjcmVhdGVkQXQiOiIyMDE4LTAyLTE5VDEzOjMwOjQ1LjQ5MFoiLCJ1cGRhdGVkQXQiOiIyMDE4LTAyLTE5VDEzOjMwOjQ1LjQ5MFoiLCJfX3YiOjB9LCJpYXQiOjE1MTkwNDg1NzJ9.Lyns3QtTh2Yhq7ANwUXMlRSOmeqbWu8SDcANxcY9JAQ')
//       .end((err, res) => {
//         console.log(res.body);
//         console.log(err)
//         expect(err).to.be.null
//         expect(res).to.have.status(200)
//         expect(res.req._hasBody)
//         expect(res.body).to.have.property('msg')
//         expect(res.body).to.have.property('articleRemove')
//         expect(res.body.msg).to.be.a('string')
//         expect(res.body.articleRemove).to.be.a('object')
//         done()
//       })
//   })
// })
