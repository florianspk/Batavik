
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
 *  MessageResponse:
 *   type: object
 *   properties:
 *    message: 
 *     type: string
 * 
 *  Comment:
 *   type: object
 *   properties:
 *    text: 
 *     type: string
 *    rate: 
 *     type: integer
 *    idProduct: 
 *     type: integer
 *    idUser: 
 *     type: integer
 * 
 *  ListComment:
 *   type: array
 *   items:
 *    type: object
 *    properties:
 *      text: 
 *          type: string
 *      rate: 
 *          type: integer
 *      idProduct: 
 *          type: integer
 *      idUser: 
 *          type: integer
 * 
 *  NewComment:
 *   type: object
 *   properties:
 *    text: 
 *     type: string
 *    rate: 
 *     type: integer
 *    idProduct: 
 *     type: integer
 * 
 */
module.exports = {}