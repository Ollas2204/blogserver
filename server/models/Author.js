const Schema = require('mongoose').Schema

var authorSchema = new Schema({
  fullName : {
    type : String,
    required : true
  },
  email : {
    type : String,
    unique : true,
    required : true    
  },
  password : {
    type : String,
    required : true
  },
}, {
  timestamps : true
})

module.exports = (require('mongoose')).model('Author', authorSchema)
