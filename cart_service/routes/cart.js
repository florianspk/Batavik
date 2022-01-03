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
   *     description: recherche le panier non valider d'un utilisateur avec son id (idUser)
   *     
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
   *     description: recherche le panier non valider d'un utilisateur, si il n'existe pas il le creer, en suite il creer un produitCard avec l'id du panier, avec l'id du produit et avec la quantiter
   *     
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
   *     description: Change la quantiter d'un produit dans produit cart si la quantiter est => 0 on supprime la ligne du produit cart
   *     
  */ 
    router.post("/quantityProduct", cart.quantityProduct);
  
    /*
    // Retrieve all
    router.get("/", cart.findOne);
  */

    app.use("/api/cart", router);
   
  };