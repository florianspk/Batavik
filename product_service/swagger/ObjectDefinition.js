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
 */
module.exports = {}