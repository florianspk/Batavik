
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
 *    firstname:
 *     type: string
 *    lastname:
 *     type: string    
 *    email:
 *     type: string
 *    password:
 *     type: string
 *    enabled:
 *     type: integer
 *    image:
 *     type: string
 *    lastLogin:
 *     type: string
 */
module.exports = {}