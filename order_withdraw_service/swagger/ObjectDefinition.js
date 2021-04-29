
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
 *  User:
 *   type: object
 *   properties:
 *    _id: 
 *     type: string    
 *    name:
 *     type: string
 *    mail: 
 *     type: string    
 *    address:
 *     type: string
 */
module.exports = {}