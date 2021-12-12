module.exports = (app) => {
    const cart = require("../controllers/cart.js");
  
    var router = require("express").Router();
  
    // Create a new
    router.get("/", cart.findOne);
  
    // Create a new
    router.post("/", cart.addcart);
  
    // Create a new
    router.post("/quantityProduct", cart.quantityProduct);
  
    /*
    // Retrieve all
    router.get("/", cart.findOne);
  */

    app.use("/api/cart", router);
   
  };