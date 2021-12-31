const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')


/**
 * @openapi
 * /api/product:
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
 * /api/products:
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
 * /api/product/{productId}:
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
 * /api/product/{productId}:
 *   delete:
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
 * /api/product/{productId}:
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


/**
 * @openapi
 * /api/top/products:
 *   get:
 *     tags:
 *       - Products
 *     description: get top product
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ProductList'
 *       500:
 *         description: An error occured when get top product
 */
router.get("/top/products",productController.bestProducts);


/**
 * @openapi
 * /api/best/products:
 *   get:
 *     tags:
 *       - Products
 *     description: get best product
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ProductList'
 *       500:
 *         description: An error occured when get best product
 */
router.get("/best/products",productController.topProducts);




module.exports = router;
