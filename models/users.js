'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    userPassword: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
