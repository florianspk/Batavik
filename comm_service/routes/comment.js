module.exports = (app) => {
    var router = require("express").Router();
    const comment = require("../controllers/comment.js");
         
    router.get("/", comment.findAll);
    router.get("/product/:id", comment.findProductComment);
    router.delete("/:id", comment.removeOne)
   
    app.use("/api/comments", router);

  };
  