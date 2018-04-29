let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let bodyParser = require('body-parser');
let app = express();

let profile = require('./routes/login');
let profile = require('./routes/profile');
let directory = require('./routes/directory');

let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/markhamhill-portal', { promiseLibrary: require('bluebird') }).then(() => console.log('Connection Succesful')).catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));

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