'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 40],
        notEmpty: true,
      }
    },
    school: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 55],
          notEmpty: true,
        }        
    },
    email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
          notEmpty:true,
        }        
    },
    password: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 55],
          notEmpty: true,
        }        
    },
  }, {
    sequelize,
    modelName: 'user'
  });

  User.associate = (models) => {
    //many user-books to a user
    //since its a foreign key, only needs to be added on one end
    //User.hasMany(models.User_book)
  };

  return User;
};