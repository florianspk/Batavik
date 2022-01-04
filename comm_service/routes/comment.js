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
   *     description: recherche tous les commentaires 
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
   *     description: creer un commentaire
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
   *     description: recherche tous les commentaires d'un produit en fonction de son id
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
   *     description: recherche un commentaire
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
   *     description: Supprimer un commentaire
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
   *     description: recherche tous les commentaires d'un utilisteur en fonction de son id
   *     
  */
    router.get("/user/:idUser", comment.findUserComment);

 
   
    app.use("/api/comment", router);

  };
  