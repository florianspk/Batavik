module.exports = (app) => {
    const order = require("../controllers/order.js");
  
    var router = require("express").Router();
  
    // find one 
  /**
   * @openapi
   * /api/order/all:
   *   get:
   *     security:
   *       - jwt: []
   *     tags:
   *       - order
   *     description: recherche tous les commande d'un utilisteur en fonction de son id (idUser)
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
   *     description: valide le panier, enregistre les prix dans les lignes dans produit cart et creer une linge order et le renseigner dans cart produit
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
   *     description: change le status d'une commande en "annuler" si elle n'est pas "finish", en fonction de l'id de la commande
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
   *     description: change le status d'une commande en "return" si elle n'est pas "finish", en fonction de l'id de la commande
   *     parameters:
   *       - in: path
   *         name : id
   *         schema: 
   *           type: integer
   *     
  */
    router.post("/return/:id", order.return)
  
  
    app.use("/api/order", router);
   
  };