const express = require('express');
const router = express.Router();
const infoController = require('../controllers/infoProductController')

/**
 * @openapi
 * /api/info:
 *   post:
 *     tags:
 *       - Info Product
 *     description: Create new info for a product
 *     summary: Add a new info product
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               idProduct:
 *                 type: integer
 *               height:
 *                 type: number
 *               depth:
 *                 type: string
 *               length:
 *                 type: file
 *               color:
 *                 type: string
 *             required:
 *               - idProduct
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Info_product'
 *       500:
 *         description: An error occured when create a new information product
 */
router.post('/',infoController.addInfo);

/**
 * @openapi
 * /api/info/{idInfo}:
 *   delete:
 *     tags:
 *       - Info Product
 *     description: Delete one information for a product
 *     parameters:
 *       - in: path
 *         name: idInfo
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id to reference Information
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *            schema:
 *              type: integer
 *       500:
 *         description: An error occured when delete a information product
 */
router.delete('/:idInfo',infoController.delInfo);


/**
 * @openapi
 * /api/info/{idInfo}:
 *   patch:
 *     tags:
 *       - Info Product
 *     description: Modify a information product
 *     parameters:
 *       - in: path
 *         name: idInfo
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id to reference information product
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               idProduct:
 *                 type: integer
 *               height:
 *                 type: number
 *               depth:
 *                 type: string
 *               length:
 *                 type: file
 *               color:
 *                 type: string
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Info_product'
 *       500:
 *         description: An error occured when update a information product
 */
router.patch('/:idInfo',infoController.updateInfo);

/**
 * @openapi
 * /api/info/product/{productId}:
 *   get:
 *     tags:
 *       - Info Product
 *     description: Get Information for one product
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id to reference product
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Info_product'
 *       500:
 *         description: An error occured when get a information for a product
 */
router.get('/product/:productId',infoController.getInfo);


module.exports = router;
