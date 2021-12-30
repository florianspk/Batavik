const express = require('express');
const router = express.Router();
const infoController = require('../controllers/infoProductController')


router.post('/',infoController.addInfo);

router.delete('/:idInfo',infoController.delInfo);

router.patch('/:idInfo',infoController.updateInfo);

router.get('/product/:productId',infoController.getInfo);


module.exports = router;
