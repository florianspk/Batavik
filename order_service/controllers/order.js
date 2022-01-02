const { create } = require("domain");
const { findOne } = require("../../cart_service/controllers/cart");
const db = require("../models");
const cart = db.cart;
const productCart = db.productCart;
const order = db.order;

//* Find a single with an id
exports.findAll = (req, res) => {
    try{
        if( typeof req.body.idUser === 'undefined' ){
          throw new Error("Il manque des informations dans notre requete");
        }
          
        if( isNaN(parseInt(req.body.idUser)) ){
            throw new Error("Une des valeurs envoyé n'est pas valide");
        }
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
    }catch (error) {
        res.status(400).send({
          message: error.message
        });
      }
  };

//* Valide order
exports.validateOrder = (req, res) => {
    try{
        if( typeof req.body.idUser === 'undefined' ){
          throw new Error("Il manque des informations dans notre requete");
        }
          
        if( isNaN(parseInt(req.body.idUser)) ){
            throw new Error("Une des valeurs envoyé n'est pas valide");
        }
        var totalPrices = 0;
        //listProduct = JSON.parse(req.body.productList);
        order.create({ 
            orderToken: strRandom({
                includeUpperCase: true,
                includeNumbers: true,
                length: 150,
                startsWithLowerCase: true
              }),
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
        

    }catch (error) {
        res.status(400).send({
        message: error.message
        });
    }
    
  };

  function strRandom(o) {
    var a = 10,
        b = 'abcdefghijklmnopqrstuvwxyz',
        c = '',
        d = 0,
        e = ''+b;
    if (o) {
      if (o.startsWithLowerCase) {
        c = b[Math.floor(Math.random() * b.length)];
        d = 1;
      }
      if (o.length) {
        a = o.length;
      }
      if (o.includeUpperCase) {
        e += b.toUpperCase();
      }
      if (o.includeNumbers) {
        e += '1234567890';
      }
    }
    for (; d < a; d++) {
      c += e[Math.floor(Math.random() * e.length)];
    }
    return c;
  }