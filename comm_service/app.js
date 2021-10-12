var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var commentaireRouter = require('./routes/commentaire');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/commentaire', commentaireRouter);

/* routes */
//app.use('/', require('./routes/comment.js'));
require('./routes/comment.js')(app)

const db = require("./models");
db.sequelize.sync({ force: true })
  .then(() => {
    console.log("Drop and re-sync db.");
  });

module.exports = app;
