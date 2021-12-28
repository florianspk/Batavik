const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')


/**
 * @openapi
 * /product:
 *   post:
 *     tags:
 *       - Products
 *     description: Create new Product
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ProductList'
 *       500:
 *         description: An error occured when create a new product
 */
//router.post('/product',productController.newProduct);



/**
 * @openapi
 * /product:
 *   post:
 *     tags:
 *       - Products
 *     description: get all product
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ProductList'
 *       500:
 *         description: An error occured when get all product
 */
router.get("/products",productController.getProducts);

/**
 * @openapi
 * /product:
 *   post:
 *     tags:
 *       - Products
 *     description: Get one Product
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ProductList'
 *       500:
 *         description: An error occured when get a product
 */
router.get('/product/:productId',productController.getProduct);





module.exports = router;
