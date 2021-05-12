'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    getFullname() {
      return [this.firstName, this.lastName].join(' ');
    }
  }

  User.init({
    firstName: { 
      type: DataTypes.STRING,
      validate: {
        len: [3, 40],
        notEmpty: true,
      } 
    },
    lastName: { 
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
      unique: true,
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty:true,
      },
    },
    passwordHash: { type: DataTypes.STRING },
    password: { 
      type: DataTypes.VIRTUAL,
      validate: {
        isLongEnough: (val) => {
          if (val.length < 7) {
            throw new Error("Please choose a longer password");
          }
        },
      },

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

  User.beforeSave((user, options) => {
    if(user.password) {
      user.passwordHash = bcrypt.hashSync(user.password, 10);
    }
  });


  return User;
};