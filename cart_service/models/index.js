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
db.status = require("./status.js")(sequelize, Sequelize);
db.historystatus = require("./historystatus.js")(sequelize, Sequelize);

/* relation */

db.productCart.belongsTo(db.order, {foreignKey: {field: "id_order", allowNull: true}});//
db.order.hasMany(db.productCart, {foreignKey: {field: "id_order", allowNull: true}});//

db.productCart.belongsTo(db.cart, {foreignKey: {field: "id_cart", allowNull: true }});//
db.cart.hasMany(db.productCart, {foreignKey: {field: "id_cart", allowNull: true }});

db.historystatus.belongsTo(db.order, {foreignKey: "id_order"});//
db.order.hasMany(db.historystatus, {foreignKey: "id_order"});

db.historystatus.belongsTo(db.status, {foreignKey: "id_status"});//
db.status.hasMany(db.historystatus, {foreignKey: "id_status"});

module.exports = db;


