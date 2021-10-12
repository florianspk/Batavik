const db = require("../models");
const Comment = db.comment;

exports.newComment = (req, res) => {

  // Read text, note, idProduct and idUser from request body
  const { text, note, idProduct, idUser } = req.body;

  Comment.create({ text: text, note: note, idProduct: idProduct, idUser: idUser })
  .then((Comment) => {
    res.status(200).send({
      message: 'Commentaire créer',
      content: Comment
    });
  })
  .catch((err) => {
    res.status(403).send({
      message: "Impossible de creer votre commentaire ",
      erreur: err
    });
  })

  
  };

exports.findProductComment = (req, res) => {
  res.status(200).send({
    message: 'les commantaire du produit id ' + req.params.idProduit,
  });
  };

  
exports.findOne = (req, res) => {
  res.status(200).send({
    message: 'le commantaire d id ' + req.params.id,
  });
  };


/* GET home page. */
exports.removeOne = (req, res) => {
  res.status(200).send({
    message: 'supprime le commentaire ' + req.params.id,
  });
  };

  




