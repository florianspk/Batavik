module.exports = {
  HOST: "julienkeiff.fr",
  USER: "root",
  PORT: 3111,
  PASSWORD: "comm_pass",
  DB: "db_comm",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
