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

  Comment.findAll({
    attributes: ['text', 'note', 'idProduct', 'idUser'],
    where: {
        idProduct: req.params.idProduct
      }
  })
    .then((user) => {
      res.status(200).send({
        content: user
      });
    })
    .catch((err) => {
      res.status(403).send({
        message: 'Les commentaires sont introuvable',
        erreur: err
      });
    }); 

  };

  
exports.findOne = (req, res) => {

  Comment.findOne({
    attributes: ['text', 'note', 'idProduct', 'idUser'],
    where: {
        id: req.params.id
      }
  })
    .then((user) => {
      if(user != null || 0){
        res.status(200).send({
          content: user
        });
      }else{
        res.status(200).send({
          message: 'Commentaire introuvable',
          content: null
        });
      }
      
    })
    .catch((err) => {
      res.status(403).send({
        message: 'Une erreur est survenue',
        erreur: err
      });
    }); 

  
  };


/* GET home page. */
exports.removeOne = (req, res) => {
  
  Comment.destroy({
    where: {
        id: req.params.id
      }
  })
    .then((user) => {
      if(user != 0){
        res.status(200).send({
          message: 'Commentaire supprimer',
          e:user
        });
      }else{
        res.status(403).send({
          message: "Commentaire introuvable il n'a donc pas pus etre supprimé"
        });
      }
      
    })
    .catch((err) => {
      res.status(403).send({
        message: "Une erreur est survenue",
        erreur: err
      });
    }); 

  };

  




