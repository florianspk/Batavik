var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const corsOptions = {
  origin: process.env.ORIGIN_ALLOWED || "http://localhost:8080",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

var app = express();

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const db = require("./models");

/* routes */
require('./routes/order.js')(app)

db.sequelize.sync({ force: false })
  .then(() => {
    console.log("Drop and re-sync db.");
  });


module.exports = app;
