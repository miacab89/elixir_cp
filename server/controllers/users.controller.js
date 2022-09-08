const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;

exports.getUsers = async (req, res) => {
   await res.json({ message: Users });
}

module.exports = Users; 
