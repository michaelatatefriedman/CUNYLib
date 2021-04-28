//NEEDS TO BE FINISHED
//Mariam

'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Book extends Model {}

  Book.init({
    title : {
      type: DataTypes.STRING,
      validate: {
        len: [1, 40],
        notEmpty: true,
      }
    },
    author: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 40],
        notEmpty: true,
      }
    },
    isbn: {
      type: DataTypes.BIGINT,
      validate: {
        len: [10, 13],
      }
    },
    edition: {
      type: DataTypes.INT,
      validate: {
        isInt: true, 
      }
    },
    // picture: {
    //   type: DataTypes.BLOB,
    //   validate: {
        
    //   }
    // },
    status: {
      type: DataTypes.BOOLEAN,
      validate: {
        len: [3, 40],
        notEmpty: true,
      }
    },
    dateUploaded: {
      type: DataTypes.STRING,
      validate: {
        isDate: true,
        notEmpty: true,
      }
    },
    dateBorrowed: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
        notEmpty: true,
      }
    },
    dateReturned: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
        notEmpty: true,
      }
    },
  }, {
    sequelize,
    modelName: 'book'
  });

  Book.associate = (models) => {
    //many books to many user-books
    //Book.hasMany(models.User_book)
  };

  return Book;
};