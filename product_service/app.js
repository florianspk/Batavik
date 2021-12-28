const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const productRoutes = require('./routes/product_routes');
const categRoutes = require('./routes/categ_routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/', productRoutes);

app.use('/api/categ', categRoutes);

// static Images Folder
app.use('/uploads', express.static('./uploads'))


const db = require("./models");
db.sequelize.sync({ force: false})
    .then(() => {
        console.log("Drop and re-sync db.");
    });
module.exports = app;
