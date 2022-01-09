const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controllers')
const uploadMiddleware = require('../middlewares/upload_image')
const auth = require('../middlewares/auth')


// GET all Users
router.get("/users",[auth.validateToken],userController.getAllUser)


// GET one user

router.get("/user/:idUser" , [auth.validateToken],userController.getOneUser)

// DELETE one user
router.delete("/user/:idUser",userController.deleteOneUser)

// Edit one user
router.patch("/user/:idUser",[uploadMiddleware.upload,auth.validateToken],userController.editOneUser)

// get current user
router.get("/user", [auth.validateToken], userController.getCurrentUser)

//delete current user
router.delete("/user",auth.validateToken,userController.deleteCurrentUser)

// Edit Current user
router.patch("/user",[auth.validateToken,uploadMiddleware.upload],userController.editCurrentUser)



module.exports = router;
