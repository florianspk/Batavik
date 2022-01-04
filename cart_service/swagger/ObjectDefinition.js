
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

 */
module.exports = {}