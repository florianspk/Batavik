const dbConfig = require("../db/config.js");
/* co */
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
/* */
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
/*
/* declaration */
db.cart = require("./cart.js")(sequelize, Sequelize);
db.order = require("./order.js")(sequelize, Sequelize);
db.productCart = require("./productCart.js")(sequelize, Sequelize);

//db.model2 = require("./model2.js")(sequelize, Sequelize);
/* relation 
db.model2.hasOne(db.model1, {foreignKey: "id"});
db.model1.belongsTo(db.model2, {foreignKey: "id"});
*/

/* relation */

db.productCart.belongsTo(db.order, {foreignKey: "id_order"});
db.order.hasOne(db.productCart, {foreignKey: "id_order"});

db.productCart.belongsTo(db.cart, {foreignKey: "id_cart"});
db.cart.hasOne(db.productCart, {foreignKey: "id_cart"});

/* export */
module.exports = db;