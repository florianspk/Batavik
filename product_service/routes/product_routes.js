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
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               image:
 *                 type: file
 *               categId:
 *                 type: integer
 *               height:
 *                 type: number
 *               depth:
 *                 type: number
 *               length:
 *                 type: number
 *               color:
 *                 type: string
 *             required:
 *               - name
 *               - price
 *               - description
 *               - categId
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
 *     description: Get all product
 *     parameters:
 *       - in: query
 *         name : page
 *         schema:
 *           type: integer
 *           default: 1
 *         required: false
 *         description: The number of page
 *       - in: query
 *         name : size
 *         schema:
 *           type: integer
 *           default: 3
 *         required: false
 *         description: The number of items to skip before starting to collect the result set
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
 *     description: Delete one Product
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
 *            schema:
 *              type: integer
 *       500:
 *         description: An error occured when delete a product
 */
router.delete('/product/:productId',productController.delProduct);

/**
 * @openapi
 * /api/product/{productId}:
 *   patch:
 *     tags:
 *       - Products
 *     description: Modify a product
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id to reference product
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               image:
 *                 type: file
 *               categId:
 *                 type: integer
 *             required:
 *               - name
 *               - price
 *               - description
 *               - categId
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ProductList'
 *       500:
 *         description: An error occured when update a product
 */
router.patch('/product/:productId',productController.upload,productController.updateProduct);


/**
 * @openapi
 * /api/top/products:
 *   get:
 *     tags:
 *       - Products
 *     description: get top product
 *     parameters:
 *       - in: query
 *         name : page
 *         schema:
 *           type: integer
 *           default: 1
 *         required: false
 *         description: The number of page
 *       - in: query
 *         name : size
 *         schema:
 *           type: integer
 *           default: 3
 *         required: false
 *         description: The number of items to skip before starting to collect the result set
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
 *     parameters:
 *       - in: query
 *         name : page
 *         schema:
 *           type: integer
 *           default: 1
 *         required: false
 *         description: The number of page
 *       - in: query
 *         name : size
 *         schema:
 *           type: integer
 *           default: 3
 *         required: false
 *         description: The number of items to skip before starting to collect the result set
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
