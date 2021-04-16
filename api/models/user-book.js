//NEEDS TO BE FINISHED

'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User_Book extends Model {}

  User_Book.init({
    lender: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 40],
        notEmpty: true,
      }
    },
  }, {
    sequelize,
    modelName: 'post'
  });

  User_Book.associate = (models) => {
    //many books to many user-books
       //many user-books to a user
    //foreign key constraint, user id on lender and borrower, and
    //book id on borrower
    
  };

  return User_Book;
};