let multer = require('multer');
let mu = multer();
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controllers')
const uploadMiddleware = require('../middlewares/upload_image')
const auth = require('../middlewares/auth')


router.get("/user", [auth.validateToken], userController.getCurrentUser)

router.get("/users",[auth.validateToken],userController.getAllUser)

router.post("/user" , [uploadMiddleware.upload],userController.createUser)

router.delete("/user",userController.deleteCurrentUser)

router.patch("/user",userController.editCurrentUser)



module.exports = router;
