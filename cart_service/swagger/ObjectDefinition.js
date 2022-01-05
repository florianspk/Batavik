
/**
 * @openapi
 * components:
 *  securitySchemes:
 *   jwt:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * definitions:
 *  UsersList:
 *   type: array
 *   items: 
 *    $ref: '#/definitions/User'
 *  Order:
 *   type: object
 *   properties:
 *    id: 
 *     type: integer    
 *    idUser:
 *     type: integer
 *  Cart:
 *   type: object
 *   properties:
 *    id: 
 *     type: integer    
 *    validation:
 *     type: integer
 *    cartPrice:
 *     type: number
 *    idUser:
 *     type: integer
 *    createdAt:
 *     type: string
 *    updatedAt:
 *     type: string
 *    productCarts:
 *     type: array
 *     items: 
 *      type: object
 *      properties:
 *       id: 
 *          type: integer
 *       idProduct: 
 *          type: integer
 *       unitPrice: 
 *          type: integer
 *       quantity: 
 *          type: integer
 *       createdAt: 
 *          type: string
 *       updatedAt: 
 *          type: string
 *       id_order: 
 *          type: integer
 *       id_cart: 
 *          type: integer
 * 
 *  MessageResponse:
 *   type: object
 *   properties:
 *    message: 
 *     type: string    
 */
module.exports = {}