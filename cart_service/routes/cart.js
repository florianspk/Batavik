module.exports = (app) => {
    const cart = require("../controllers/cart.js");
  
    var router = require("express").Router();
  
    // find one 
    router.get("/", cart.findOne);
  
    // Create a new
    router.post("/", cart.addcart);
  
    // cahnge quentiter or delete a row cart 
    router.post("/quantityProduct", cart.quantityProduct);
  
    /*
    // Retrieve all
    router.get("/", cart.findOne);
  */

    app.use("/api/cart", router);
   
  };