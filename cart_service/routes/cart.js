module.exports = (app) => {
    const cart = require("../controllers/cart.js");
    const auth = require("../middlewares/auth.js")
    
    var router = require("express").Router();
  
    // find one
  /**
   * @openapi
   * /api/cart/:idUser:
   *   get:
   *     security:
   *       - jwt: []
   *     tags:
   *       - cart
   *     description: searches for the invalid basket of a user with his id
   *     parameters:
   *       - in: path
   *         name : idUser
   *         required: true
   *         schema: 
   *           type: integer
   *       - in: header
   *         name: Authorization
   *         type: string
   *         required: true
   *     responses:
   *       200:
   *         description: succesful operation
   *         content:
   *           application/json:
   *            schema: 
   *             $ref: '#/definitions/Cart'  
  */ 
    router.get("/:idUser", auth.validateToken, cart.findOne);
  
    // Create a new
    /**
   * @openapi
   * /api/cart:
   *   post:
   *     security:
   *       - jwt: []
   *     tags:
   *       - cart
   *     description: search for a user's unvalidated basket, if it does not exist, create it, then create a product Card with the basket id, with the product id and with the quantity
   *     parameters:
   *       - in: body
   *         name : body
   *         required: true
   *         schema: 
   *           type: objet
   *           required:
   *             - idUser
   *             - idProduct
   *             - quantity
   *           properties:
   *            idUser:
   *              type: integer 
   *            idProduct:     
   *              type: integer 
   *            quantity:     
   *              type: integer 
   *       - in: header
   *         name: Authorization
   *         type: string
   *         required: true
   *     responses:
   *       200:
   *         description: succesful operation
   *         content:
   *           application/json:
   *            schema: 
   *             $ref: '#/definitions/MessageResponse' 
   *             
   *             
    */ 
    router.post("/", auth.validateToken, cart.addcart);
  
    // cahnge quentiter or delete a row cart 
    /**
   * @openapi
   * /api/cart/quantityProduct:
   *   post:
   *     security:
   *       - jwt: []
   *     tags:
   *       - cart
   *     description: Change the quantity of a product in product cart if the quantity is => 0 we delete the line of the product cart
   *     parameters:
   *       - in: body
   *         name : body
   *         required: true
   *         schema: 
   *           type: objet
   *           required:
   *             - idUser
   *             - idProduct
   *             - quantity
   *           properties:
   *            idUser:
   *              type: integer 
   *            idProduct:     
   *              type: integer 
   *            quantity:     
   *              type: integer 
   *       - in: header
   *         name: Authorization
   *         type: string
   *         required: true
   *     responses:
   *       200:
   *         description: succesful operation
   *         content:
   *           application/json:
   *            schema: 
   *             $ref: '#/definitions/MessageResponse' 
  */ 
    router.post("/quantityProduct", auth.validateToken, cart.quantityProduct);

  /**
   * @openapi
   * /api/cart/clean/:id:
   *   delete:
   *     security:
   *       - jwt: []
   *     tags:
   *       - cart
   *     description: clean cart by id cart
   *     parameters:
   *       - in: path
   *         name : idUser
   *         required: true
   *         schema: 
   *           type: integer
   *       - in: header
   *         name: Authorization
   *         type: string
   *         required: true
   *     responses:
   *       200:
   *         description: succesful operation
   *         content:
   *           application/json:
   *            schema: 
   *             $ref: '#/definitions/MessageResponse' 

  */ 
    router.delete("/clean/:id", auth.validateToken, cart.cleanCart);
  
    app.use("/api/cart", router);
   
  };