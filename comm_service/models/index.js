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

//db.model2 = require("./model2.js")(sequelize, Sequelize);
/* relation 
db.model2.hasOne(db.model1, {foreignKey: "id"});
db.model1.belongsTo(db.model2, {foreignKey: "id"});
*/
/* export */
module.exports = db;