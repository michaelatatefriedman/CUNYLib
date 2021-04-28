const express = require('express');
const router = express.Router();


// Load each controller
const authController = require('./auth');
const postsController = require('./posts.js');
const userController = require('./users.js');
const bookController = require('./books.js');
const userBookController = require('./users-book.js')
const appConfigController = require('./appConfig.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/auth', authController);
router.use('/posts', postsController);
router.use('/users', userController);
router.use('/books', bookController);
router.use('/user-book', userBookController);
router.use('/application-configuration', appConfigController);


module.exports = router;