module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      username: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
    return Users;
  };