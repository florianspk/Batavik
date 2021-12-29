const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const dbConfig = require(__dirname + '/../config/config.js')[env];
const db = {};
/* co */
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
/* */


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.cart = require("./cart.js")(sequelize, Sequelize);
db.order = require("./order.js")(sequelize, Sequelize);
db.productCart = require("./productCart.js")(sequelize, Sequelize);

/* relation */

db.productCart.belongsTo(db.order, {foreignKey: "id_order"});//
db.order.hasMany(db.productCart, {foreignKey: "id_order"});//

db.productCart.belongsTo(db.cart, {foreignKey: "id_cart"});//
db.cart.hasMany(db.productCart, {foreignKey: "id_cart"});

module.exports = db;


