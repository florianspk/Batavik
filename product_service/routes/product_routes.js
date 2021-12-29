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
router.post('/product',productController.upload,productController.newProduct);



/**
 * @openapi
 * /products:
 *   get:
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
 * /product/{productId}:
 *   get:
 *     tags:
 *       - Products
 *     description: Get one Product
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Product'
 *       500:
 *         description: An error occured when get a product
 */
router.get('/product/:productId',productController.getProduct);


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
router.delete('/product/:productId',productController.delProduct);

/**
 * @openapi
 * /product:
 *   patch:
 *     tags:
 *       - Products
 *     description: Modify a product
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
router.patch('/product/:productId',productController.upload,productController.updateProduct);





module.exports = router;
