const { create } = require("domain");
const { findOne } = require("../../cart_service/controllers/cart");
const db = require("../models");
const cart = db.cart;
const productCart = db.productCart;
const order = db.order;

//* Find a single with an id
exports.findAll = (req, res) => {
    
    order.findAll({
        include:[{
            model: productCart,
            include: [{
                model: cart ,
                attributes: [],
                where: {
                    validation : 1,
                    idUser : req.body.idUser
                }
            }],
        }]
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

//* Valide order
exports.validateOrder = (req, res) => {
    var totalPrices = 0;
    //listProduct = JSON.parse(req.body.productList);
    order.create({ 
        orderToken: "orderToken",
        orderPrice: 0.00,
        tradeInformation: "tradeInformation",
        deadLineOrder: Date.now()
    }).then(async(order) => {

        const orderPromises = req.body.productList.map(async element => {
             productcart = await productCart.findOne({
                include: [{
                        model: cart ,
                        attributes: [],
                        where: {
                            validation : 0,
                            idUser : req.body.idUser
                        }
                    }],
                where:{
                    idProduct: element["id"]
                },
            })
            if(productcart != null){
                totalPrices += element["price"] * productcart.quantity;

                await productcart.update({
                    unitPrice: element["price"]
                })
                productcart.save();
            }else{
                await order.destroy();
                
            }
            
            
        })

        Promise.all(orderPromises).then(arrayOfResponses => {
            order.update({
                orderPrice: totalPrices
                    
            })
            console.log("test");
            order.save().then((order) => 
                cart.findOne({
                    where: {
                        validation : 0,
                        idUser : req.body.idUser
                    }
                }).then(async(datacart)=> {
                    if(datacart == null){
                        res.send({message : 'impossible de trouver votre panier ou votre article ou le client'})
                    }else{
                        await datacart.update({validation: 1})
                        datacart.save();
                        res.send({message : order})
                    }
                    
                })
            );
        })

         
    })
    

    
    
  };

  