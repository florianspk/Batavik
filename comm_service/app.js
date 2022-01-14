var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const corsOptions = {
  origin: process.env.ORIGIN_ALLOWED || "http://localhost:8080",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const app = express();

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* routes */
require('./routes/comment.js')(app)

const db = require("./models");
db.sequelize.sync({ force: false })
  .then(() => {
    console.log("Drop and re-sync db.");
  });

module.exports = app;
