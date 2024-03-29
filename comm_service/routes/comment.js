module.exports = (app) => {
    var router = require("express").Router();
    const comment = require("../controllers/comment.js");
    const auth = require("../middlewares/auth.js")

    /**
   * @openapi
   * /api/comment/all:
   *   get:
   *     tags:
   *       - comment
   *     description: create a comment header
   *     parameters:
   *      - in: query
   *        name : page
   *        schema:
   *          type: integer
   *          default: 1
   *        required: false
   *        description: The number of page
   *      - in: query
   *        name : size
   *        schema:
   *          type: integer
   *          default: 3
   *        required: false
   *        description: The number of items to skip before starting to collect the result set
   *     responses:
   *       200:
   *         description: succesful operation
   *         content:
   *           application/json:
   *            schema: 
   *             $ref: '#/definitions/Comment' 
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
   *         required: true
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
   *             $ref: '#/definitions/Comment' 
   *     
  */
    router.post("/", auth.validateToken ,comment.newComment);

  /**
   * @openapi
   * /api/comment/product/:idProduit:
   *   get:
   *     tags:
   *       - comment
   *     description: searches all reviews for a product based on its id
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
   *       - in: path
   *         name: idProduit
   *         type: integer
   *         required: true
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
   *     tags:
   *       - comment
   *     description: search for a comment
   *     parameters:
   *       - in: path
   *         name: id
   *         type: integer
   *         required: true
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
   * /api/comment/:id:
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
   *         required: true
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
  */
    router.delete("/:id", auth.validateToken, comment.removeOne)

  /**
   * @openapi
   * /api/comment/user/:idUser:
   *   get:
   *     tags:
   *       - comment
   *     description: searches all comments for a user based on their id
   *     parameters:
   *       - in: path
   *         name: idUser
   *         type: integer
   *         required: true
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
   *             $ref: '#/definitions/ListComment' 
   *     
  */
    router.get("/user/:idUser", comment.findUserComment);

 
   
    app.use("/api/comment", router);

  };
  