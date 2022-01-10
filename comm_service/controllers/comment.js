const db = require("../models");
const axios = require("axios")
const Comment = db.comment;

exports.newComment = async(req, res) => {

  try{
    if( typeof req.body.rate === 'undefined' || typeof req.body.idProduct === 'undefined' || typeof req.body.text === 'undefined'){
      throw new Error("Il manque des informations dans notre requete");
    }
      
    if( isNaN(parseInt(req.body.rate)) || isNaN(parseInt(req.body.idProduct)) ){
        throw new Error("Une des valeurs envoyé n'est pas valide");
    }


    const config = {
      headers: { authorization: req.headers.authorization}
    };
    let resultAxios = await axios.get("http://localhost:3010/api/auth/user",config)
    const idUser = resultAxios.data.id

    // Read text, rate, idProduct and idUser from request body
    const { text, rate, idProduct } = req.body;

    Comment.create({ text: String(text), rate: rate, idProduct: idProduct, idUser: idUser })
    .then((comment) => {
      res.status(200).send(comment);
    })
    .catch((err) => {
      throw new Error("Impossible de creer votre commentaire ");
    })
  }catch(error){
    res.status(400).send({
      message: error.message
    });
  }

  
  };

exports.findProductComment = (req, res) => {
  try{
    if( typeof req.params.idProduct === 'undefined' ){
      throw new Error("Il manque des informations dans notre requete");
    }
      
    if( isNaN(parseInt(req.params.idProduct)) ){
        throw new Error("Une des valeurs envoyé n'est pas valide");
    }

    const {page, size} = req.query;
    const {limit, offset} = Comment.getPagination(page, size);

    Comment.findAll({
      attributes: ['text', 'rate', 'idProduct', 'idUser'],
      where: {
          idProduct: req.params.idProduct
        },
      limit,
      offset
    })
      .then((comments) => {
        res.status(200).send(comments);
      })
      .catch((err) => {
        throw new Error('Les commentaires sont introuvable');
      }); 
    }catch(error){
      res.status(400).send({
        message: error.message
      });
    }

  };

  
exports.findOne = (req, res) => {
  try{
    if( typeof req.params.id === 'undefined' ){
      throw new Error("Il manque des informations dans notre requete");
    }
      
    if( isNaN(parseInt(req.params.id)) ){
      throw new Error("Une des valeurs envoyé n'est pas valide");
    }

    Comment.findOne({
      attributes: ['text', 'rate', 'idProduct', 'idUser'],
      where: {
          id: req.params.id
        }
    })
      .then((comment) => {
        if(comment != null || 0){
          res.status(200).send(comment);
        }else{
          res.status(204).send({
            message: 'Commentaire introuvable'
          });
        }
        
      })
      .catch((err) => {
        res.status(400).send({
          message: 'Une erreur est survenue'
        });
      }); 
  }catch(error){
    res.status(400).send({
      message: error.message
    });
  }
  

  
  };


/* GET home page. */
exports.removeOne = (req, res) => {
  try{
    if( typeof req.params.id === 'undefined' ){
      throw new Error("Il manque des informations dans notre requete");
    }
      
    if( isNaN(parseInt(req.params.id)) ){
        throw new Error("Une des valeurs envoyé n'est pas valide");
    }
    Comment.destroy({
      where: {
          id: req.params.id
        }
    })
      .then((comment) => {
        if(comment != 0){
          res.status(200).send({
            message: 'Commentaire supprimer'
          });
        }else{
          res.status(204).send({
            message: 'Commentaire introuvable'
          });
        }
        
      })
      .catch((err) => {
        throw new Error("Une erreur est survenue");
      }); 
  }catch(error){
    res.status(400).send({
      message: error.message
    });
  }
  

  };


  exports.findUserComment = (req, res) => {
    try{
      if( typeof req.params.idUser === 'undefined' ){
        throw new Error("Il manque des informations dans notre requete");
      }
        
      if( isNaN(parseInt(req.params.idUser)) ){
          throw new Error("Une des valeurs envoyé n'est pas valide");
      }

      const {page, size} = req.query;
      const {limit, offset} = Comment.getPagination(page, size);

      Comment.findAll({
        attributes: ['text', 'rate', 'idProduct', 'idUser'],
        where: {
          idUser: req.params.idUser
          },
          limit,
          offset
      })
        .then((comments) => {
          res.status(200).send(comments);
        })
        .catch((err) => {
          throw new Error('Les commentaires sont introuvable');
        }); 
      }catch(error){
        res.status(400).send({
          message: error.message
        });
      }
  
    };

  exports.findAllComment = (req, res) => {
    const {page, size} = req.query;
    const {limit, offset} = Comment.getPagination(page, size);
    Comment.findAll({
      attributes: ['id', 'text', 'rate', 'idProduct', 'idUser'],
      limit,
      offset
    })
      .then((comments) => {
        res.status(200).send(comments);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      }); 
  }
  




