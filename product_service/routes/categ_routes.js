const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/categorieController')

/**
 * @openapi
 * /api/categ/list:
 *   get:
 *     tags:
 *       - Categorie Product
 *     summary: Get information for all categories
 *     description: Get the name and id for all categories
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
 *               $ref: '#/definitions/CategorieList'
 *       500:
 *         description: An error occured when get the name and id for all categories
 */
router.get('/list',categorieController.getCategList);


/**
 * @openapi
 * /api/categ/{categId}/products:
 *   get:
 *     tags:
 *       - Categorie Product
 *     summary: Get products by categId
 *     description: Get all products in categ
 *     parameters:
 *      - in: path
 *        name: categId
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id to reference categ
 *      - in: query
 *        name : page
 *        schema:
 *          type: integer
 *          default: 1
 *        required: false
 *        description: The number of page
 *      - in: query
 *        name : size
 *        schema:
 *          type: integer
 *          default: 3
 *        required: false
 *        description: The number of items to skip before starting to collect the result set
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/CategorieList'
 *       500:
 *         description: An error occured when get all products in categ
 */
router.get('/:categId/products',categorieController.getProductCateg);


module.exports = router;
