//Danielle
const sequelize = require('sequelize')
const Op = sequelize.Op;
const express = require('express');
const router = express.Router();
const db = require('../models');
const user_book = require('../models/user_book');
const { User_book } = db;


router.post('/create', (req,res) => {
  console.log("POST body: ", req.body);
  User_book.create({'owner_comment': req.body.owner_comment, "LenderId": req.body.LenderId, "BorrowerId": req.body.LenderId, "BookId": req.body.BookId})
    .then(val => res.json(val));
});

router.get('/available_books/:id', (req,res) => {
  const { id } = req.params;
  User_book.sequelize.query('SELECT id, "LenderId", "BorrowerId", "BookId", owner_comment FROM user_books where id = :givenId and "LenderId" = "BorrowerId"',
  {
      replacements: {givenId: id},
      type: db.sequelize.QueryTypes.SELECT
  })    
  .then(val => res.json(val));
});

//{where: ["title like ?", '%' + x + '%']}

router.get('/all', (req,res) => {
  User_book.findAll({attributes: ['id','LenderId','BorrowerId','BookId','owner_comment']}).then(val => res.json(val));
});

router.get('/:id', (req,res) => {
  /*
  User_book.findAll({
      include: [
          {
              model: User,
              on: {
                  BorrowerName: sequelize.where(sequelize.col("user_book.BorrowerId"), "=", sequelize.col("user.col1")),
                  LenderName: sequelize.where(sequelize.col("ModelA.col1"), "=", sequelize.col("ModelB.col1"))

              },
              required: false
          }
      ]         
  })*/
  const { id } = req.params;
  db.sequelize.query('SELECT * FROM user_books where id = :givenId',
      {
          replacements: {givenId: id},
          type: db.sequelize.QueryTypes.SELECT
      })
    .then(val => res.json(val));
});

module.exports = router;