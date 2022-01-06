module.exports = (app) => {
    const order = require("../controllers/order.js");
  
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
   *             $ref: '#/definitions/OrderWithIdUser' 
  */
    router.get("/allByUser", order.findAllByUser);

  /**
   * @openapi
   * /api/order/all:
   *   get:
   *     security:
   *       - jwt: []
   *     tags:
   *       - order
   *     description: search all commands
   *     responses:
   *       200:
   *         description: succesful operation
   *         content:
   *           application/json:
   *            schema: 
   *             $ref: '#/definitions/Order'
  */
     router.get("/all", order.findAll);
  
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
    router.post("/validate", order.validateOrder)
    
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
    router.post("/cancel/:id", order.cancel)

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
    router.post("/return/:id", order.return)
  
  
    app.use("/api/order", router);
   
  };