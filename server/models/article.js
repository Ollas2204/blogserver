const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var articleSchema = new Schema({
  content : {
    type: String,
    required : true
  },
  title : {
    type : String,
    required : true
  },
  author : {
    type : String,
    required : true
  },
  timestamp : true
})

const articleSchema = mongoose.model('Article', articleSchema);

module.exports = Articles
