//Danielle
const sequelize = require('sequelize')
const Op = sequelize.Op;
const express = require('express');
const router = express.Router();
const db = require('../models'); 
const user_book = require('../models/user_book');
const { User_book } = db;

//api/user-book/create

router.post('/create', (req,res) => {
  console.log("POST body: ", req.body);
  User_book.create({'owner_comment': req.body.owner_comment, "LenderId": req.body.LenderId, "BorrowerId": req.body.LenderId, "BookId": req.body.BookId})
    .then(val => res.json(val));
});
//api/user-book/available_books/:id
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
  const { id } = req.params;
  db.sequelize.query('SELECT * FROM user_books where id = :givenId',
      {
          replacements: {givenId: id},
          type: db.sequelize.QueryTypes.SELECT
      })
    .then(val => res.json(val));
});




//NEW

//return similar books that are availble
router.get('/similar_books/:bookname', (req, res)=>{
  const {bookname} = req.params;
  db.sequelize.query('SELECT ub.id, u.email, u.school, b.title, b.author  from user_books AS ub    LEFT OUTER JOIN users as u      ON ub."LenderId" = u.id      LEFT OUTER JOIN books as b       ON b.id = ub."BookId" WHERE "LenderId" = "BorrowerId" AND b.title LIKE :book',
  {
      replacements: {book: '%'+bookname+'%'},
      type: db.sequelize.QueryTypes.SELECT
  })
.then(val => res.json(val));
});



//return all books available from user to lend
router.post('/my_vailable_books', (req, res)=>{
  db.sequelize.query('SELECT ub.id, b.title, b.author  from user_books AS ub    LEFT OUTER JOIN users as u      ON ub."LenderId" = u.id      LEFT OUTER JOIN books as b       ON b.id = ub."BookId" WHERE ub."LenderId" = ub."BorrowerId" AND ub."LenderId" = :user_id ',
  {
      replacements: {user_id: req.body.userid},
      type: db.sequelize.QueryTypes.SELECT
  })
.then(val => res.json(val));
});


//return all books currently borrowing

router.post('/my_borrowing', (req, res)=>{
  db.sequelize.query('SELECT ub.id AS lender_id, u.email AS lender_email, u.school, b.title, b.author  from user_books AS ub    LEFT OUTER JOIN users as u      ON ub."LenderId" = u.id   LEFT OUTER JOIN users as u2      ON ub."BorrowerId" = u2.id   LEFT OUTER JOIN books as b       ON b.id = ub."BookId" WHERE ub."LenderId" <> ub."BorrowerId" AND ub."BorrowerId" = :user_id ',
  {
      replacements: {user_id: req.body.userid},
      type: db.sequelize.QueryTypes.SELECT
  })
.then(val => res.json(val));
});

//return all books currently lending out

router.post('/my_lending', (req, res)=>{
  db.sequelize.query('SELECT ub.id AS borrower_id, u2.email AS borrower_email, u2.school, b.title, b.author  from user_books AS ub    LEFT OUTER JOIN users as u      ON ub."LenderId" = u.id   LEFT OUTER JOIN users as u2      ON ub."BorrowerId" = u2.id   LEFT OUTER JOIN books as b       ON b.id = ub."BookId" WHERE ub."LenderId" <> ub."BorrowerId" AND ub."LenderId" = :user_id ',
  {
      replacements: {user_id: req.body.userid},
      type: db.sequelize.QueryTypes.SELECT
  })
.then(val => res.json(val));
});

//set borrower
//takes the id of the borrower and the id of the lender and the id of the book
router.post('/set_borrower', (req, res, err) =>{
  User_book.update({BorrowerId: req.body.borrower_id},
    {where: {id: req.body.book_id, LenderId: req.body.lender_id}})
    .then(val => res.json(val))
    .catch(err)
})

//reset to available
router.post('/set_available', (req, res, err) =>{
  User_book.update({BorrowerId: req.body.id},
    {where: {id: req.body.book_id, LenderId: req.body.id}})
    .then(val => res.json(val))
    .catch(err)
})

//remove a book from the listing
//Genre.destroy({where: {name: 'Sci-Fi'}})
router.post('/remove_book', (req, res) =>{
  User_book.destroy({where: {id: req.body.book_id, LenderId: req.body.lender_id}})
  .then(val => res.json(val))
  
})
//MARIAM
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