module.exports = {
  HOST: "julienkeiff.fr",
  USER: "root",
  PORT: 3112,
  PASSWORD: "order_pass",
  DB: "order",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
