const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const dbConfig = require(__dirname + '/../config/config.js')[env];

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
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
/*
/* declaration */
db.comment = require("./comment.js")(sequelize, Sequelize);
//db.model2 = require("./model2.js")(sequelize, Sequelize);
/* relation 
db.model2.hasOne(db.model1, {foreignKey: "id"});
db.model1.belongsTo(db.model2, {foreignKey: "id"});
*/
/* export */
module.exports = db;