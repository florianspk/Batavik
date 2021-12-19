const db = require("../models");
const cart = db.cart;
const productCart = db.productCart;

//* Find a single with an id
exports.findOne = (req, res) => {
    
    cart.findOne({
        include: [{
                model: productCart ,               
            }],
          where: {
            validation : 0,
            idUser : req.body.idUser
        }
      })
        .then((data) => {
          if(data == null ){
            res.status(400).send({
              message: "Panier introuvable",
            });
          }else{
            res.send(data);
          }
          
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "Some error occurred while retrieving .",
          });
        });
  };

//* create and add new cart and new cproduct cart 
exports.addcart = async(req, res) => {

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

        res.send("Produit ajouter");
    
  };


  //* Update by the id in the request
exports.quantityProduct = async(req, res) => {

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
                res.status(400).json({ message: 'Ligne de panier introuvable' });
            }else
            {
                if(req.body.quantity <= 0 ){
                    //res.send("test");
                    await data.destroy();
                }else{
                    data.quantity = req.body.quantity;
                    await data.save()
                }
            }
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "Some error occurred while retrieving .",
          });
        });

        res.send("Ligne panier modifier");
  };



/*
//* Retrieve all data
exports.findAll = (req, res) => {
  Produit.findAll({
    include: ["marque", "detailclimuint", "detailpac", "detailclimuext"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving .",
      });
    });
};

*/






