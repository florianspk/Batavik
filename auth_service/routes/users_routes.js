const express = require('express');
const router = express.Router();
const userController = require("../controllers/user")


router.post('/signin', userController.signIn );


router.post('/signup', userController.upload, userController.signUp );


router.get('/users', Auth.validateToken, userController.getUsers);


module.exports = router;
