module.exports = (app) => {
    var router = require("express").Router();
    const comment = require("../controllers/comment.js");
     
  /**
   * @openapi
   * /api/comment:
   *   get:
   *     security:
   *       - jwt: []
   *     tags:
   *       - comment
   *     description: creer un commentaire
   *     
  */
    router.post("/", comment.newComment);

  /**
   * @openapi
   * /api/comments/:idProduit:
   *   get:
   *     security:
   *       - jwt: []
   *     tags:
   *       - comment
   *     description: recherche tous les commentaires d'u produit en fonction de son id
   *     
  */
    router.get("/product/:idProduit", comment.findProductComment);
  
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
   
    app.use("/api/comment", router);

  };
  