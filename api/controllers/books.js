const express = require('express');
const router = express.Router();
const db = require('../models');
const { Book } = db;

router.post('/create', (req,res) => {
    console.log("POST body: ", req.body);
    Book.create({'title': req.body.title, "author": req.body.author, "isbn": req.body.isbn})
        .then(val => res.json(val));
  
  });


module.exports = router;