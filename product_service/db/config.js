module.exports = {
  HOST: "julienkeiff.fr",
  USER: "root",
  PORT: 3113,
  PASSWORD: "product_pass",
  DB: "Product",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
