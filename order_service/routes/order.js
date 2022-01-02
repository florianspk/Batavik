module.exports = (app) => {
    const order = require("../controllers/order.js");
  
    var router = require("express").Router();
  
    // find one 
    router.get("/all", order.findAll);
  
    router.post("/validate", order.validateOrder)
    
    router.post("/cancel/:id", order.cancel)

    router.post("/return/:id", order.return)
  
    /*
    // Retrieve all
    router.get("/", cart.findOne);
  */
  
    app.use("/api/order", router);
   
  };