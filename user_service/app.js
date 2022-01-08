const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser')

const userRoutes = require('./routes/users')

const corsOptions = {
    origin: process.env.ORIGIN_ALLOWED || "http://localhost:8080",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const app = express();

app.use(cors(corsOptions))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', userRoutes)

// static Images Folder
app.use('/uploads', express.static('./uploads'))

const db = require("./models");
db.sequelize.sync({force: false})
    .then(() => {
        console.log("Drop and re-sync db.");
    });

module.exports = app;
