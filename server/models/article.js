const Schema = require('mongoose').Schema

var articleSchema = new Schema({
  title: {
    type : String,
    required : true
  },
  authorId: {
    type : Schema.Types.ObjectId, ref: 'Author',
    required : true
  },
  content: {
    type : String,
    required : true
  },
  comments: [{
    authorName : String,
    body : {
      type : String
    },
    date : {
      type : Date,
      default : Date.now
    }
  }],
  likes: [{
    authorId : { type : Schema.Types.ObjectId, ref: 'Author' }
  }]
}, {
  timestamps : true
})

module.exports = (require('mongoose')).model('Article', articleSchema)
