const db = require("../models");
const cart = db.cart;
const productCart = db.productCart;

//* Find a single with an id
exports.findOne = (req, res) => {
    try{
      if( typeof req.params.idUser === 'undefined' ){
        throw new Error("Il manque des informations dans notre requete");
      }
        
      if( isNaN(parseInt(req.params.idUser)) ){
          throw new Error("Une des valeurs envoyé n'est pas valide");
      }

    cart.findOne({
      include: [{
              model: productCart ,               
          }],
        where: {
          validation : 0,
          idUser : req.params.idUser
      }
    })
      .then((data) => {
        if(data == null ){
          res.status(204).send({
            message: "Panier introuvable",
          });
        }else{
          res.send(data);
        }
        
      })
      .catch((err) => {
        res.status(400).send({
          message: err.message || "Some error occurred while retrieving .",
        });
      });

    }catch (error) {
      res.status(400).send({
        message: error.message
      });
    }
    
  };

//* create and add new cart and new cproduct cart 
exports.addcart = async(req, res) => {
  try{
    if( typeof req.body.idUser === 'undefined' || typeof req.body.idProduct === 'undefined' || typeof req.body.quantity === 'undefined'){
      throw new Error("Il manque des informations dans notre requete");
    }
      
    if( isNaN(parseInt(req.body.idUser)) || isNaN(parseInt(req.body.idProduct)) || isNaN(parseInt(req.body.quantity))){
        throw new Error("Une des valeurs envoyé n'est pas valide");
    }

    await cart.findOne({
        where: {
            validation : 0,
            idUser : req.body.idUser
        },
      })
        .then(async (data) => {
            if( data == null || data == [] ){
                await cart.create({ 
                    idUser: req.body.idUser ,
                    validation: 0 ,
                    cartPrice: 0,

                })
                .then((data) => {
                    dataCart = data
                })
                .catch((err) => {
                    res.status(500).json({ message: 'un probleme est survenue' });
                });
            }else
            {
                dataCart = data
            }
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "Some error occurred while retrieving .",
          });
        });


        await productCart.findOne({
            include: [{
                    model: cart ,
                    attributes: [],
                    where: {
                        validation : 0,
                        idUser : req.body.idUser
                    }
                }],
            where: {idProduct : req.body.idProduct },
            logging: true,
          })
            .then( async (data) => {
                if( data == null || data == [] ){
                    await productCart.create({ 
                        idProduct: req.body.idProduct ,
                        quantity: req.body.quantity,
                        id_cart : dataCart.id
                    })
                    .then((data) => {
                        dataProductCart = data
                    })
                    .catch((err) => {
                        res.status(500).json({ message: 'un probleme est survenue' });
                    });
                }else
                {
                    dataProductCart = data
                }
            })
            .catch((err) => {
              res.status(500).send({
                message: err.message || "Some error occurred while retrieving .",
              });
            });

        res.send({ message: "Produit ajouter"});
    }catch (error) {
      res.status(400).send({
        message: error.message
      });
    }
  };


  //* Update by the id in the request
exports.quantityProduct = async(req, res) => {
  try{
    if( typeof req.body.idUser === 'undefined' || typeof req.body.idProduct === 'undefined' || typeof req.body.quantity === 'undefined'){
      throw new Error("Il manque des informations dans notre requete");
    }
      
    if( isNaN(parseInt(req.body.idUser)) || isNaN(parseInt(req.body.idProduct)) || isNaN(parseInt(req.body.quantity))){
        throw new Error("Une des valeurs envoyé n'est pas valide");
    }
    await productCart.findOne({
        include: [{
                model: cart ,
                attributes: [],
                where: {
                    validation : 0,
                    idUser : req.body.idUser
                }
            }],
        where: {idProduct : req.body.idProduct },
        logging: true,
      })
        .then( async (data) => {
            if( data == null || data == [] ){
              throw new Error('Ligne de panier introuvable');
            }else
            {
                if(req.body.quantity <= 0 ){
                    //res.send("test");
                    await data.destroy();
                }else{
                    data.quantity = req.body.quantity;
                    await data.save()
                }
                res.send({
                  message: "Ligne panier modifier"
                });
            }
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "Some error occurred while retrieving .",
          });
        });

        
      }catch (error) {
        res.status(400).send({
          message: error.message
        });
      }
  };



  exports.cleanCart = async (req, res) => {
    try{
      if( typeof req.params.id === 'undefined'){
        throw new Error("Il manque des informations dans notre requete");
      }
        
      if( isNaN(parseInt(req.params.id)) ){
          throw new Error("Une des valeurs envoyé n'est pas valide");
      }

    
    await productCart.destroy({where: {id_cart: req.params.id}})
    .catch((err) => {
      res.status(400).send({
        message: err.message || "Some error occurred while retrieving .",
      });
    });

    await cart.destroy({where: {id: req.params.id}})
      .catch((err) => {
        res.status(400).send({
          message: err.message || "Some error occurred while retrieving .",
        });
      });

      res.status(200).send({
        message: 'The cart is clean' 
      });

    }catch (error) {
      res.status(400).send({
        message: error.message
      });
    }
    
  };





