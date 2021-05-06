//NEEDS TO BE FINISHED
//Danielle


'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User_Book extends Model {}

  User_Book.init({
  owner_comment: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 400],
        notEmpty: true,
      }
    },
  }, {
    sequelize,
    modelName: 'user_book'
  });

  User_Book.associate = (models) => {
    //many books to many user-books
       //many user-books to a user
    //foreign key constraint, user id on lender and borrower, and
    //book id on borrower
        //Player.belongsTo(Team)  // `teamId` will be added on Player / Source model
        User_Book.belongsTo(models.User, {as: 'Owner', foreignKey: 'LenderId'})
        //Not allowing null. If its not being lent out to anyone then both the lender and borrower ID will be the same
        User_Book.belongsTo(models.User, {as: 'Borrower', foreignKey:'BorrowerId'})
        //User_Book.belongsTo(models.User, {as: 'Borrower', foreignKey: {name: 'BorrowerId', allowNull: true}})
        User_Book.belongsTo(models.Book, {as: 'Book', foreignKey:'BookId'})

  };

  return User_Book;
};