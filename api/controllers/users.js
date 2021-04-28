const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { User } = db;

router.get('/all', (req,res) => {
    User.findAll({attributes: ['id','firstName','lastName','school','email']}).then(val => res.json(val));
  });

  //only way to create a new user is via the signup page


module.exports = router;