const model = require('../models');
const Info_Product = model.Info_product;

exports.addInfo = (req, res, next) => {
    try {
        let hauteur = req.body.hauteur ? req.body.hauteur : null;
        let profondeur = req.body.profondeur ? req.body.profondeur : null;
        let longueur = req.body.longueur ? req.body.longueur : null;
        let couleur = req.body.couleur ? req.body.couleur : null;
        let idProduct = req.body.idProduct ? req.body.idProduct : null;
        console.log(idProduct)
        Info_Product.create({
            hauteur: hauteur,
            profondeur: profondeur,
            longueur: longueur,
            couleur: couleur,
            ProductId: idProduct,
            createdAt: Date.now(),
            updatedAt: Date.now()
        }).then(result => {
            res.status(200).json(result)
        }).catch(error => {
            console.log(error)
            res.status(500).json(error.message)
        })
    }catch (exception){
        res.status(500).json(exception.message)
    }
}

exports.updateInfo = (req, res, next) => {
    try {
        let idInfo = req.params.idInfo;
        Info_Product.findOne({where: {id: idInfo}})
            .then(info_product => {
                let hauteur = req.body.hauteur ? req.body.hauteur : info_product.getDataValue("hauteur");
                console.log(req.body.hauteur)
                let profondeur = req.body.profondeur ? req.body.profondeur : info_product.getDataValue("profondeur");
                let longueur = req.body.longueur ? req.body.longueur : info_product.getDataValue("longueur");
                let couleur = req.body.couleur ? req.body.couleur : info_product.getDataValue("couleur");
                let productId = req.body.productId ? req.body.productId : info_product.getDataValue("productId");
                if (info_product) {
                    info_product.update({
                        hauteur: hauteur,
                        profondeur: profondeur,
                        longueur: longueur,
                        couleur: couleur,
                        productId: productId,
                        updatedAt: Date.now(),
                    }).then(result => {
                        res.status(200).json(result)
                    }).catch(error => {
                        console.log(error)
                        res.status(405).json("An error occured when update product")
                    })
                }
            }).catch(error => {
            res.status(401).json("The information not exist")
        })
    }catch (exception){
        res.status(510).json(exception.message)
    }


}

exports.getInfo = (req, res, next) => {
    const {page, size} = req.query;
    const {limit, offset} = Info_Product.getPagination(page, size);
    let productId = req.params.productId;
    Info_Product.findAndCountAll({
        where : {
            productId: productId
        },
        limit,
        offset,
        attributes: ['id', 'hauteur', 'profondeur', 'longueur', 'couleur', 'createdAt', 'updatedAt'],
        }
    ).then(result => {
        const response = Info_Product.getPagingData(result, page, limit)
        res.status(200).json(response);
    }).catch(error =>{
        console.log(error)
        res.status(500).json(error);
    })
}

exports.delInfo = (req, res, next) => {
    let idInfo = req.params.productId;
    Info_Product.destroy({
        where : {id: idInfo}
    }).then(result => {
        res.status(200).json(result)
    }).catch(error => {
        console.log(error)
        res.status(500).json(error)
    })
}