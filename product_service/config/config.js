require("dotenv").config();

module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  PORT: process.env.DB_PORT,
  DB: process.env.DB_DATABASE,
  dialect: process.env.DB_DIALECT,
  pool: {
    max: 5, //Connexion max
    min: 0, //Connexion min
    acquire: 30000, //Nombre de milliseconde ou il vas essayer de se connecter avant de renvoyer une erreur
    idle: 10000 //Nombre de seconde qu'une connexion peut etre inactive
  }
};