module.exports = {
    host: "localhost",
    username: "root",
    password: "severedpath",
    db: "elixir",
    dialect: "mysql",
    port: 3306,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };