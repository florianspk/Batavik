module.exports = (app) => {
    const cart = require("../controllers/cart.js");
  
    var router = require("express").Router();
  
    // find one
  /**
   * @openapi
   * /api/cart:
   *   get:
   *     security:
   *       - jwt: []
   *     tags:
   *       - order
   *     description: searches for the invalid basket of a user with his id
   *     parameters:
   *       - in: body
   *         name : body
   *         
   *         schema: 
   *           $ref: '#/definitions/test' 
   *     responses:
   *       200:
   *         description: succesful operation
   *         content:
   *           application/json:
   *            schema: 
   *             $ref: '#/definitions/test'  
   * @openapi        
   * definitions:
   *  test:
   *    type: objet   
   *    required:
   *     - idUser
   *    properties:
   *     idUser:
   *       type: integer   
  */ 
    router.get("/", cart.findOne);
  
    // Create a new
    /**
   * @openapi
   * /api/cart:
   *   post:
   *     security:
   *       - jwt: []
   *     tags:
   *       - order
   *     description: search for a user's unvalidated basket, if it does not exist, create it, then create a product Card with the basket id, with the product id and with the quantity
   *     parameters:
   *       - in: body
   *         name : body
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
    */ 
    router.post("/", cart.addcart);
  
    // cahnge quentiter or delete a row cart 
    /**
   * @openapi
   * /api/cart/quantityProduct:
   *   post:
   *     security:
   *       - jwt: []
   *     tags:
   *       - order
   *     description: Change the quantity of a product in product cart if the quantity is => 0 we delete the line of the product cart
   *     parameters:
   *       - in: body
   *         name : body
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

  */ 
    router.post("/quantityProduct", cart.quantityProduct);
  
    app.use("/api/cart", router);
   
  };