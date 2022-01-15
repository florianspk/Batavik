const { create } = require("domain");
const { findOne } = require("../../cart_service/controllers/cart");
const { Op } = require("sequelize");
const db = require("../models");
const { exit } = require("process");
const cart = db.cart;
const productOrder = db.productOrder;
const order = db.order;
const historystatus = db.historystatus;

//* Find a single with an id
exports.findAllByUser = (req, res) => {
    try{
        if( typeof req.params.idUser === 'undefined' ){
          throw new Error("Il manque des informations dans notre requete");
        }
          
        if( isNaN(parseInt(req.params.idUser)) ){
            throw new Error("Une des valeurs envoyé n'est pas valide");
        }

        const {page, size} = req.query;
        const {limit, offset} = order.getPagination(page, size);

        order.findAll({
            include:[{
                model: productOrder,
                required: true
            }],
            where: {
                idUser : req.params.idUser
            },
            limit,
            offset
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

//* Find a single with an id
exports.findAll = (req, res) => {
    try{
        const {page, size} = req.query;
        const {limit, offset} = order.getPagination(page, size);
        order.findAll({
            include:[{
                model: productOrder,
                required: true
            }],
            limit,
            offset
        })
        .then(result => {
            order.count().then(count => {
                const response = order.getPagingData(result, count, page, limit)
                res.status(200).json(response);
            })
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
            idUser: req.body.idUser,
            deadLineOrder: new Date(new Date().getTime()+(10*24*60*60*1000))
        }).then(async(order) => {

            historystatus.create({
                id_status : 1,
                id_order : order.id
            })

            const orderPromises = req.body.productList.map(async element => {
                productorder = await productOrder.findOne({
                    include: [{
                            model: cart ,
                            required: true,
                            attributes: [],
                            where: {
                                validation : 0,
                                idUser : req.body.idUser
                            }
                        }],
                    where:{
                        idProduct: element["id"]
                    },
                }).then(async productorder => {
                    if(productorder != null){
                        totalPrices += element["price"] * productorder.quantity;
    
                        await productorder.update({
                            unitPrice: element["price"],
                            orderId: order.id,
                            cartId: null
                        })
                        console.log(productorder);
                        productorder.save();
                    }else{
                        await order.destroy();
                        order = null;
                        
                    }
                })
                
                
                
            })

            Promise.all(orderPromises).then(arrayOfResponses => {
                if(order == null){
                    res.send({message : 'impossible de trouver votre panier ou votre article ou le client'})
                }else{
                    order.update({
                        orderPrice: totalPrices
                    })
                    console.log("test");
                    order.save().then((order) => 
                        cart.destroy({
                            where: {
                                validation : 0,
                                idUser : req.body.idUser
                            }
                        }).then(async(datacart)=> {
                            if(datacart == null){
                                res.send({message : 'impossible de trouver votre panier ou votre article ou le client'})
                            }else{
                                res.send(order)
                            }
                            
                        })
                    );
                }
                
            })

            
        })
        

    }catch (error) {
        res.status(400).send({
        message: error.message
        });
    }
    
  };

  //* Find a single with an id
exports.cancel = (req, res) => {
    try{
        if( typeof req.body.idUser === 'undefined' || typeof req.params.id === 'undefined' ){
          throw new Error("Il manque des informations dans notre requete");
        }
          
        if( isNaN(parseInt(req.body.idUser)) || isNaN(parseInt(req.params.id)) ){
            throw new Error("Une des valeurs envoyé n'est pas valide");
        }
        
        order.findOne(
            {
                include: [{
                    model: productOrder,
                    required: true
                 },
                 {
                    model: historystatus,
                     required: true,
                     limit: 1,
                     order: [ [ 'createdAt', 'DESC' ]]
                 }],
                 where: {
                    idUser : req.body.idUser,
                    id: req.params.id
                }
                 
            })
        .then((order) => {
            if(order && order.historystatuses[0].id_status != 2){
                historystatus.create({
                    id_status : 4,
                    id_order : order.id
                }).then((data) =>{
                    res.send({
                        message: "le statut de la comande à changé"
                      });
                })
                .catch((err) => {
                    res.status(400).send({
                        message: err.message || "Some error occurred while retrieving .",
                    });
                    });
            }else{
                res.status(204).send({
                    message: "Commande introuvable ou fini",
                });
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

  exports.return = (req, res) => {
    try{
        if( typeof req.body.idUser === 'undefined' || typeof req.params.id === 'undefined' ){
          throw new Error("Il manque des informations dans notre requete");
        }
          
        if( isNaN(parseInt(req.body.idUser)) || isNaN(parseInt(req.params.id)) ){
            throw new Error("Une des valeurs envoyé n'est pas valide");
        }
        order.findOne(
            {
                include: [{
                    model: productOrder,
                    required: true
                 },
                 {
                    model: historystatus,
                     required: true,
                     limit: 1,
                     order: [ [ 'createdAt', 'DESC' ]]
                 }],
                 where: {
                    idUser : req.body.idUser,
                    id: req.params.id
                }
                 
            })
        .then((order) => {

            if(order && order.historystatuses[0].id_status != 2){
                historystatus.create({
                    id_status : 3,
                    id_order : order.id
                }).then((data) =>{
                    res.send({
                        message: "le statut de la comande à changé"
                    });
                })
                .catch((err) => {
                    res.status(400).send({
                        message: err.message || "Some error occurred while retrieving .",
                    });
                    });
            }else{
                res.status(204).send({
                    message: "Commande introuvable ou fini",
                });
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