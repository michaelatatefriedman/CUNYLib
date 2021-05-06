// Mariam
const express = require('express');
const router = express.Router();
const db = require('../models');
const book = require('../models/book');
const { Book } = db;

router.post('/create', (req,res) => {
    console.log("POST body: ", req.body);
    Book.create({'title': req.body.title, "author": req.body.author, "isbn": req.body.isbn})
        .then(val => res.json(val));
  
  });

  // changed by user to fix book details
  router.put('/edit/:id',
  (req, res) => {
    const { id } = req.params;
    Book.findByPk(id)
      .then(book => {
        if(!book) {
          return res.sendStatus(404);
        }

        book.title = req.body.title;
        book.author = req.body.author;
        book.isbn = req.body.isbn;
        book.save()
          .then(book => {
            res.json(book);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });
  }
);

// called in variation based on what was searched
  router.get('/all', (req,res) => {
    Book.findAll({attributes: ['title','author','isbn','id']}).then(val => res.json(val));
  });

  router.delete('/delete/:id',
  (req, res) => {
    const { id } = req.params;
    Book.findByPk(id)
      .then(book => {
        if(!book) {
          return res.sendStatus(404);
        }

        book.destroy();
        res.sendStatus(204);
      });
  }
);

module.exports = router;