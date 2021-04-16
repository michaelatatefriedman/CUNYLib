//NEEDS TO BE FINISHED

'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Book extends Model {}

  Book.init({
    title: {
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

  Book.associate = (models) => {
    //many books to many user-books
  };

  return Book;
};