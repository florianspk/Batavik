const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/categorieController')

/**
 * @openapi
 * /product:
 *   post:
 *     tags:
 *       - Categorie_product
 *     description: get the name and id for all categories
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ProductList'
 *       500:
 *         description: An error occured when get the name and id for all categories
 */
router.get('/list', categorieController.getCategList);


/**
 * @openapi
 * /product:
 *   post:
 *     tags:
 *       - Products
 *     description: get all products in categ
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ProductList'
 *       500:
 *         description: An error occured when get all products in categ
 */
router.get('/:categId/products',categorieController.getProductCateg);


module.exports = router;
