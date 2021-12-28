const model = require('../models');


exports.getProducts = (req, res, next) => {
    const { page, size } = req.query;
    const { limit, offset } = model.Product.getPagination(page, size);
    model.Product.findAndCountAll({
        attributes: ['id','name', 'price', 'description','image','note','CategorieProductId','createdAt','updatedAt'],
        limit,
        offset,
        include: [{
            model: model.Info_product,
            attributes: ['hauteur', 'profondeur','longueur','couleur']
        }]
    }).then(result => {
        const response = model.Product.getPagingData(result,page,limit)
        res.status(200).json(response);
    }).catch(error => {
        console.log(error)
        res.status(500).json(error);
    });
}
exports.getProduct = (req,res,next) => {
    let idProduct = req.params.productId;
    model.Product.findOne({
        where: {
            id: idProduct
        },
        attributes: ['name', 'price', 'description','image','note','CategorieProductId','createdAt','updatedAt'],
        include: [{
            model: model.Info_product,
            attributes: ['hauteur', 'profondeur','longueur','couleur']
        }]
    }).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        console.log(error)
        res.status(500).json(error);
    });
}




