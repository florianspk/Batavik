//* Retrieve all data
exports.newComment = (req, res) => {

  // Read text, note, idProduct and idUser from request body
  const { text, note, idProduct, idUser } = req.body;

  res.status(200).send({
    message: 'tout les commentaires ' + text + " " + note + " " + idProduct + " " + idUser,
  });
  };

exports.findProductComment = (req, res) => {
  res.status(200).send({
    message: 'les commantaire du produit id ' + req.params.id,
  });
  };

  
exports.findOne = (req, res) => {
  res.status(200).send({
    message: 'les commantaire du produit id ' + req.params.id,
  });
  };


/* GET home page. */
exports.removeOne = (req, res) => {
  res.status(200).send({
    message: 'supprime le commentaire ' + req.params.id,
  });
  };

  




