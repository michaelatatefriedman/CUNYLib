//Danielle
const sequelize = require('sequelize')
const Op = sequelize.Op;
const express = require('express');
const router = express.Router();
const db = require('../models');
const user_book = require('../models/user_book');
const { User_book } = db;

// add command for borrow book, which will update lenderid

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


router.put('/edit/:id',
(req, res) => {
  const { id } = req.params;
  User_book.findByPk(id)
    .then(user_book => {
      if(!user_book) {
        return res.sendStatus(404);
      }

      user_book.owner_comment = req.body.owner_comment;
      user_book.LenderId = req.body.LenderId;
      user_book.save()
        .then(user_book => {
          res.json(user_book);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
}
);

// user-book entry is only deleted when a book is deleted
router.delete('/delete/:id',
(req, res) => {
  const { id } = req.params;
  User_book.findByPk(id)
    .then(user_book => {
      if(!user_book) {
        return res.sendStatus(404);
      }

      user_book.destroy();
      res.sendStatus(204);
    });
}
);

module.exports = router;