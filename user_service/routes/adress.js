let multer = require('multer');
let mu = multer();
const express = require('express');
const router = express.Router();
const userController = require('../controllers/adresses_controllers')
const auth = require('../middlewares/auth')

// GET all Adress in a city
router.get("/city/:idCity",[auth.validateToken],userController.getAllAdressInACity)

// Delet Adress from id
router.delete("/:idAdress",[auth.validateToken],userController.deleteAdressFromId)

// Edit a Adress from id
router.patch("/:idAdress",[auth.validateToken,mu.fields([])],userController.editAdressFromId)

module.exports = router;
