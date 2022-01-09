module.exports = (app) => {
    const order = require("../controllers/order.js");
    const auth = require("../middlewares/auth.js")
  
    var router = require("express").Router();
  
  /**
   * @openapi
   * /api/order/allByUser:
   *   get:
   *     security:
   *       - jwt: []
   *     tags:
   *       - order
   *     description: searches all the commands of a user according to his id
   *     parameters:
   *       - in: path
   *         name : idUser
   *         schema: 
   *           type: integer
   *       - in: query
   *         name : page
   *         schema:
   *          type: integer
   *          default: 1
   *         required: false
   *         description: The number of page
   *       - in: query
   *         name : size
   *         schema:
   *          type: integer
   *          default: 3
   *         required: false
   *         description: The number of items to skip before starting to collect the result set
   *     responses:
   *       200:
   *         description: succesful operation
   *         content:
   *           application/json:
   *            schema: 
   *             $ref: '#/definitions/OrderWithIdUser' 
  */
    router.get("/allByUser/:idUser", auth.validateToken, order.findAllByUser);

  /**
   * @openapi
   * /api/order/all:
   *   get:
   *     security:
   *       - jwt: []
   *     tags:
   *       - order
   *     description: search all commands
   *     parameters:
   *       - in: query
   *         name : page
   *         schema:
   *          type: integer
   *          default: 1
   *         required: false
   *         description: The number of page
   *       - in: query
   *         name : size
   *         schema:
   *          type: integer
   *          default: 3
   *         required: false
   *         description: The number of items to skip before starting to collect the result set
   *     responses:
   *       200:
   *         description: succesful operation
   *         content:
   *           application/json:
   *            schema: 
   *             $ref: '#/definitions/Order'
  */
     router.get("/all", auth.validateToken, order.findAll);
  
  /**
   * @openapi
   * /api/order/validate:
   *   post:
   *     security:
   *       - jwt: []
   *     tags:
   *       - order
   *     description: validate the basket, record the prices in the lines in product cart and create an order linen and enter it in product cart
   *     parameters:
   *       - in: body
   *         name : body
   *         schema:
   *          $ref: '#/definitions/ValidateInfo'
   *     responses:
   *       200:
   *         description: succesful operation
   *         content:
   *           application/json:
   *            schema: 
   *             $ref: '#/definitions/OrderSimple'
   *     
  */
    router.post("/validate", auth.validateToken, order.validateOrder)
    
  /**
   * @openapi
   * /api/order/cancel/:id:
   *   post:
   *     security:
   *       - jwt: []
   *     tags:
   *       - order
   *     description: change the status of a command to "cancel" if it is not "finish", depending on the command id
   *     parameters:
   *       - in: path
   *         name : id
   *         schema: 
   *           type: integer
   *       - in: body
   *         name : body
   *         schema: 
   *           type: objet
   *           required:
   *             - idUser
   *           properties:
   *            idUser:
   *              type: integer
   *     responses:
   *       200:
   *         description: succesful operation
   *         content:
   *           application/json:
   *            schema: 
   *             $ref: '#/definitions/MessageResponse' 
   *     
  */
    router.post("/cancel/:id", auth.validateToken, order.cancel)

  /**
   * @openapi
   * /api/order/return/:id:
   *   post:
   *     security:
   *       - jwt: []
   *     tags:
   *       - order
   *     description: change the status of a command to "return" if it is not "finish", depending on the command id
   *     parameters:
   *       - in: path
   *         name : id
   *         schema: 
   *           type: integer
   *       - in: body
   *         name : body
   *         schema: 
   *           type: objet
   *           required:
   *             - idUser
   *           properties:
   *            idUser:
   *              type: integer
   *     responses:
   *       200:
   *         description: succesful operation
   *         content:
   *           application/json:
   *            schema: 
   *             $ref: '#/definitions/MessageResponse' 
   *     
  */
    router.post("/return/:id", auth.validateToken, order.return)
  
  
    app.use("/api/order", router);
   
  };