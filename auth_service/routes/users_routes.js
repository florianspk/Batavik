const express = require('express');
const router = express.Router();
const userController = require("../controllers/user")
const Auth = require("../middleware/auth")
let multer = require('multer');
let mu = multer();

router.post('/login', mu.fields([]),userController.signIn );


router.post('/register', userController.upload, userController.signUp );


router.get('/users', Auth.validateToken, userController.getUsers);

router.get('/validateToken', Auth.validateToken);

module.exports = router;
