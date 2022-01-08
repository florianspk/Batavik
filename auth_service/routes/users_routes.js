const express = require('express');
const router = express.Router();
const userController = require("../controllers/user")
const Auth = require("../middleware/auth")


router.post('/login',userController.signIn );

router.post('/register', userController.signUp );

router.get('/validateToken', Auth.validateExternalToken);

router.get('/user', Auth.validateToken, userController.getCurrentUser)


module.exports = router;
