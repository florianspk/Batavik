/**
 * @openapi
 * components:
 *  securitySchemes:
 *   jwt:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * definitions:
 *  ProductList:
 *   type: array
 *   items:
 *     type: object
 *     properties:
 *      totalLines:
 *       type: integer
 *      products:
 *       $ref: '#/definitions/Product'
 *      totalPages:
 *       type: integer
 *      currentPage:
 *       type: integer
 *  CategorieList:
 *   type: array
 *   items:
 *     type: object
 *     properties:
 *      totalLines:
 *       type: integer
 *      products:
 *       $ref: '#/definitions/Categorie_product'
 *      totalPages:
 *       type: integer
 *      currentPage:
 *       type: integer
 *  Product:
 *   type: object
 *   properties:
 *    _id:
 *     type: integer
 *    name:
 *     type: string
 *    price:
 *     type: number
 *    description:
 *     type: string
 *    image:
 *     type: string
 *    rate:
 *     type: number
 *    idCateg:
 *     type: integer
 *    createdAt:
 *     type: string
 *    updateAt:
 *     type: string
 *  Info_product:
 *   type: object
 *   properties:
 *    _id:
 *     type: integer
 *    height :
 *     type: number
 *    depth:
 *     type: number
 *    length:
 *     type: number
 *    color:
 *     type: number
 *    createdAt:
 *     type: string
 *    updateAt:
 *     type: string
 *  Categorie_product:
 *   type: object
 *   properties:
 *    _id:
 *     type: integer
 *    name:
 *     type: string
 *    createAt:
 *     type: string
 *    updateAt:
 *     type: string
 *
 */
module.exports = {}