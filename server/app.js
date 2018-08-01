const express         = require('express')
const path            = require('path')
const logger          = require('morgan')
const cookieParser    = require('cookie-parser')
const bodyParser      = require('body-parser')
const mongoose        = require('mongoose')
const cors            = require('cors')

mongoose.connect('mongodb://blog:asd123@ds163781.mlab.com:63781/blog', (err, response) => {
  console.log('connect database');
})
// config[process.env.DB]
const index = require('./routes/index');
const article = require('./routes/article')
const author  = require('./routes/author')

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/',index)
app.use('/articles', article)
app.use('/authors', author)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send('error')
});

module.exports = app
