let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let bodyParser = require('body-parser');
<<<<<<< HEAD
let profile = require('./routes/profile');
let directory = require('./routes/directory');
livereload = require('express-livereload');
let app = express();

livereload(app, config={});
=======
let app = express();

let login = require('./routes/login');
let profile = require('./routes/profile');
let directory = require('./routes/directory');
>>>>>>> fixbuild

<<<<<<< HEAD
// let mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://localhost/markhamhill-portal', { promiseLibrary: require('bluebird') })
//   .then(() =>  console.log('Connection Succesful')).catch((err) => console.error(err));
=======
let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/markhamhill-portal', { promiseLibrary: require('bluebird') }).then(() => console.log('Connection Succesful')).catch((err) => console.error(err));
>>>>>>> d0579b9318117485f86cb457f5ef9c9d7027a57d

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
<<<<<<< HEAD
app.use('/profile', profile);
app.use('/directory', directory);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
  err.status = 404;
=======

app.use('/login', login);
app.use('/profile', profile);
app.use('/directory', directory);

// app.get('/about',function(req,res){
//   res.sendFile(path.join(__dirname+'/about.html'));
// });

// app.get('/login',function(req,res){curl
//   res.sendFile(path.join(__dirname+'/login.component.html'));
// });

// NEW catch 404 and forward to error 404 handler
app.use(function (err, req, res, next) {
  res.status(err.status || 404);
>>>>>>> fixbuild
  next(err);
  res.render('error', {
      message: err.message,
      error: {}
  });
});

// error handler
app.use(function(err, req, res, next) {
  
  // set locals & provide error in dev.
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error 500 page
  res.status(err.status || 500);  
  next(err);
});

module.exports = app;