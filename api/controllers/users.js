const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { User } = db;

router.get('/all', (req,res) => {
    User.findAll({attributes: ['id','firstName','lastName','school','email']}).then(val => res.json(val));
  });

  //only way to create a new user is via the signup page

  router.put('/edit/:id',
  (req, res) => {
    const { id } = req.params;
    User.findByPk(id)
      .then(user => {
        if(!user) {
          return res.sendStatus(404);
        }

        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.school = req.body.school;
        user.save()
          .then(user => {
            res.json(user);
          })
          .catch(err => {
            res.status(400).json(err);
          });user
      });
  }
);

  // delete a user is through the profile page
  router.delete('/delete/:id',
  (req, res) => {
    const { id } = req.params;
    User.findByPk(id)
      .then(user => {
        if(!user) {
          return res.sendStatus(404);
        }

        user.destroy();
        res.sendStatus(204);
      });
  }
);

module.exports = router;