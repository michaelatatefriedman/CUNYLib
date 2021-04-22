//Danielle

const express = require('express');
const router = express.Router();
const db = require('../models');
const { User_book } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?
/**
 * where:{id:shopId}, 
     include:[
         { model:ShopAd, as:'ads', 
           where:{ 
                 is_valid:1, 
                 is_vertify:1},   
           required:false //This is the LEFT JOIN
           }
         ]
 * ModelA.findAll({
    include: [
        {
            model: ModelB,
            on: {
                col1: sequelize.where(sequelize.col("ModelA.col1"), "=", sequelize.col("ModelB.col1")),
                col2: sequelize.where(sequelize.col("ModelA.col2"), "=", sequelize.col("ModelB.col2"))
            },
            required:false ,
            attributes: [] // empty array means that no column from ModelB will be returned
        }
    ]
}).then((modelAInstances) => {
    // result...
});
 */

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
  
  /*
  router.post('/', (req, res) => {
    let { content } = req.body;
    
    Post.create({ content })
      .then(post => {
        res.status(201).json(post);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  
  router.get('/:id', (req, res) => {
    const { id } = req.params;
    Post.findByPk(id)
      .then(post => {
        if(!post) {
          return res.sendStatus(404);
        }
  
        res.json(post);
      });
  });
  
  
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    Post.findByPk(id)
      .then(post => {
        if(!post) {
          return res.sendStatus(404);
        }
  
        post.content = req.body.content;
        post.save()
          .then(post => {
            res.json(post);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });
  });
  
  
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Post.findByPk(id)
      .then(post => {
        if(!post) {
          return res.sendStatus(404);
        }
  
        post.destroy();
        res.sendStatus(204);
      });
  });
  */
  
  module.exports = router;