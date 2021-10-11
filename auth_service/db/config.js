module.exports = {
  HOST: "julienkeiff.fr",
  USER: "root",
  PORT: 3110,
  PASSWORD: "user_pass",
  DB: "User",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
