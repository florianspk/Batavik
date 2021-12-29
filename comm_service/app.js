var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* routes */
require('./routes/comment.js')(app)

const db = require("./models");
db.sequelize.sync({ force: true })
  .then(() => {
    console.log("Drop and re-sync db.");
  });

module.exports = app;
