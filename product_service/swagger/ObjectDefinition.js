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
 *    $ref: '#/definitions/Product'
 *  CategorieList:
 *   type: array
 *   items:
 *    $ref: '#/definitions/Categorie_product'
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