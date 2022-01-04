const model = require('../models');
const Info_Product = model.Info_product;

exports.addInfo = (req, res, next) => {
    try {
        let height = req.body.height ? req.body.height : null;
        let depth = req.body.depth ? req.body.depth : null;
        let length = req.body.length ? req.body.length : null;
        let color = req.body.color ? req.body.color : null;
        let idProduct = req.params.idProduct ? req.params.idProduct : null;
        console.log(idProduct)
        Info_Product.create({
            height: height,
            depth: depth,
            length: length,
            color: color,
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
                let height = req.body.height ? req.body.height : info_product.getDataValue("height");
                let depth = req.body.depth ? req.body.depth : info_product.getDataValue("depth");
                let length = req.body.length ? req.body.length : info_product.getDataValue("length");
                let color = req.body.color ? req.body.color : info_product.getDataValue("color");
                let productId = req.body.productId ? req.body.productId : info_product.getDataValue("productId");
                if (info_product) {
                    info_product.update({
                        height: height,
                        depth: depth,
                        length: length,
                        color: color,
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
        attributes: ['id', 'height', 'depth', 'length', 'color', 'createdAt', 'updatedAt'],
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