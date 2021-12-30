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
 *    note:
 *     type: number
 *    idCateg:
 *     type: integer
 *  Info_product:
 *   type: object
 *   properties:
 *    _id:
 *     type: integer
 *    hauteur :
 *     type: number
 *    profondeur:
 *     type: number
 *    longueur:
 *     type: number
 *    couleur:
 *     type: number
 */
module.exports = {}