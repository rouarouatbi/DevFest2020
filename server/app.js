var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');


var logger = require('morgan');
var config = require('./config');
var passport = require('passport');
//var cookieParser = require('cookie-parser');
//var session = require('express-session');
//var FileStore = require('session-file-store')(session);

const Contact = require('./models/contact');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var galleryRouter = require('./routes/galleries');
var BloodRouter = require('./routes/bloods');
var EventRouter = require('./routes/events');
var NeedRouter = require('./routes/needs');

const mongoose = require('mongoose');
const url = config.mongoUrl;
const connect = mongoose.connect(url);

connect.then((db)=>{
  console.log('Connected correctly to server');
  },(err)=>{
  console.log(err);
});

var app = express();


app.use(cors({origin:true,credentials: true}));


//app.use(cors()) 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(express.static(path.join(__dirname, 'public')));


app.use('',galleryRouter)
app.use('',BloodRouter);
app.use('',NeedRouter);
app.use('',EventRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
