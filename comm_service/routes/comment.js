module.exports = (app) => {
    var router = require("express").Router();
    const comment = require("../controllers/comment.js");
    const auth = require("../middlewares/auth.js")

   /**
   * @openapi
   * /api/comment/all:
   *   get:
   *     security:
   *       - jwt: []
   *     tags:
   *       - comment
   *     description: search all comments
   *     responses:
   *       200:
   *         description: succesful operation
   *         content:
   *           application/json:
   *            schema: 
   *             $ref: '#/definitions/ListComment' 
   *     
  */
    router.get("/all", comment.findAllComment);
    
  /**
   * @openapi
   * /api/comment:
   *   post:
   *     security:
   *       - jwt: []
   *     tags:
   *       - comment
   *     description: create a comment header
   *     parameters:
   *       - in: body
   *         name : body
   *         schema: 
   *          $ref: '#/definitions/NewComment' 
   *       - in: header
   *         name: Authorization
   *         type: string
   *     responses:
   *       200:
   *         description: succesful operation
   *         content:
   *           application/json:
   *            schema: 
   *             $ref: '#/definitions/Comment' 
   *     
  */
    router.post("/", auth.validateToken ,comment.newComment);

  /**
   * @openapi
   * /api/comment/product/:idProduit:
   *   get:
   *     security:
   *       - jwt: []
   *     tags:
   *       - comment
   *     description: searches all reviews for a product based on its id
   *     parameters:
   *       - in: path
   *         name: idProduit
   *         type: integer
   *     responses:
   *       200:
   *         description: succesful operation
   *         content:
   *           application/json:
   *            schema: 
   *             $ref: '#/definitions/ListComment' 
   *     
  */
    router.get("/product/:idProduct", comment.findProductComment);
  
  /**
   * @openapi
   * /api/comment/:id:
   *   get:
   *     security:
   *       - jwt: []
   *     tags:
   *       - comment
   *     description: search for a comment
   *     parameters:
   *       - in: path
   *         name: id
   *         type: integer
   *     responses:
   *       200:
   *         description: succesful operation
   *         content:
   *           application/json:
   *            schema: 
   *             $ref: '#/definitions/Comment' 
   *     
  */
    router.get("/:id", comment.findOne)

  /**
   * @openapi
   * /api/comment:
   *   delete:
   *     security:
   *       - jwt: []
   *     tags:
   *       - comment
   *     description: Delete a comment
   *     parameters:
   *       - in: path
   *         name: id
   *         type: integer
   *     responses:
   *       200:
   *         description: succesful operation
   *         content:
   *           application/json:
   *            schema: 
   *             $ref: '#/definitions/MessageResponse' 
   *     
  */
    router.delete("/:id", comment.removeOne)

  /**
   * @openapi
   * /api/comment/user/:idUser:
   *   get:
   *     security:
   *       - jwt: []
   *     tags:
   *       - comment
   *     description: searches all comments for a user based on their id
   *     parameters:
   *       - in: path
   *         name: idUser
   *         type: integer
   *     responses:
   *       200:
   *         description: succesful operation
   *         content:
   *           application/json:
   *            schema: 
   *             $ref: '#/definitions/ListComment' 
   *     
  */
    router.get("/user/:idUser", comment.findUserComment);

 
   
    app.use("/api/comment", router);

  };
  