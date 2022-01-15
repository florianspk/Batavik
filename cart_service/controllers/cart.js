const db = require("../models");
const cart = db.cart;
const productCart = db.productCart;
const isNotNumber = (number) => Number.isNaN(+number)

//* Find a single with an id
exports.findOne = async (req, res) => {
  let { idUser } = req.params
  try {
    if (idUser == null) return res.status(400).send('User id must be present in request body')
    if (isNotNumber(idUser)) return res.status(400).send('User id must be a number')
    const cartOfUser = await cart.findOne({
      include: [{ model: productCart }],
      where: { idUser}
    })
    if(!cartOfUser) return res.status(204).send({message: "Panier introuvable",});
    res.json(cartOfUser)
  } catch (error) {
    console.error(error)
    res.status(500).send({message: error.message});
  }
};

const findOrCreate = async ({model, where, toCreate, postCreate = (instance) => {}}) => {
  let instance = await model.findOne({ where })
  if(instance == null) {
    instance = await model.create(toCreate)
  }
  if (postCreate) await postCreate(instance)
  return instance
}
//* create and add new cart and new cproduct cart 
exports.addcart = async (req, res) => {
  const {idUser, idProduct, quantity} = req.body
  if (idUser == null) return res.status(400).send('User id must be present in request body')
  if (idProduct == null) return res.status(400).send('The product id must be present in request body')
  if (quantity == null) return res.status(400).send('Quantity must be present in the request body')
  if (isNotNumber(idUser)) return res.status(400).send('User id must be a number')
  if (isNotNumber(idProduct)) return res.status(400).send('The product id must be a number')
  if (isNotNumber(quantity)) return res.status(400).send('Quantity must be a number')
  try {
    let cartForUser = await findOrCreate({
      model: cart,
      where: { idUser },
      toCreate: { idUser, cartPrice: 0, },
    })
    const id_cart = cartForUser.id
    
    let productToAdd = await findOrCreate({
      model: productCart,
      where: { idProduct, id_cart },
      toCreate: { idProduct, quantity: 0, id_cart, },
      postCreate: async (productCartForUser) => await cartForUser.addProductCart(productCartForUser)
    })
    await productToAdd.increment('quantity', {by: +quantity})
    res.send({ message: "Product add" });
  } catch (error) {
    console.error(error)
    res.status(500).send({message: error.message});
  }
};


//* Update by the id in the request
exports.quantityProduct = async (req, res) => {
  try {
    if (typeof req.body.idUser === 'undefined' || typeof req.body.idProduct === 'undefined' || typeof req.body.quantity === 'undefined') {
      throw new Error("Il manque des informations dans notre requete");
    }

    if (isNaN(parseInt(req.body.idUser)) || isNaN(parseInt(req.body.idProduct)) || isNaN(parseInt(req.body.quantity))) {
      throw new Error("Une des valeurs envoyé n'est pas valide");
    }
    await productCart.findOne({
      include: [{
        model: cart,
        attributes: [],
        where: {
          idUser: req.body.idUser
        }
      }],
      where: { idProduct: req.body.idProduct },
      logging: true,
    })
      .then(async (data) => {
        if (data == null || data == []) {
          throw new Error('Ligne de panier introuvable');
        } else {
          if (req.body.quantity <= 0) {
            //res.send("test");
            await data.destroy();
          } else {
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


  } catch (error) {
    res.status(400).send({
      message: error.message
    });
  }
};

exports.cleanCart = async (req, res) => {
  try {
    if (typeof req.params.id === 'undefined') {
      throw new Error("Il manque des informations dans notre requete");
    }

    if (isNaN(parseInt(req.params.id))) {
      throw new Error("Une des valeurs envoyé n'est pas valide");
    }


    await productCart.destroy({ where: { id_cart: req.params.id } })
      .catch((err) => {
        res.status(400).send({
          message: err.message || "Some error occurred while retrieving .",
        });
      });

    await cart.destroy({ where: { id: req.params.id } })
      .catch((err) => {
        res.status(400).send({
          message: err.message || "Some error occurred while retrieving .",
        });
      });

    res.status(200).send({
      message: 'The cart is clean'
    });

  } catch (error) {
    res.status(400).send({
      message: error.message
    });
  }

};





