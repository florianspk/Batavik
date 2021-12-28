const model = require('../models');

exports.getCategList = (req,res,next) => {

    const { page, size } = req.query;
    const { limit, offset } = model.Categorie_product.getPagination(page, size);
    model.Categorie_product.findAndCountAll({
        limit,
        offset,
        attributes: ['name','id'],
    }).then(result => {
        const response =  model.Categorie_product.getPagingData(result,page,limit)
        res.status(200).json(response);
    }).catch(error => {
        console.log(error)
        res.status(500).json(error);
    });
}


exports.getProductCateg = (req, res, next) => {
    const { page, size } = req.query;
    const { limit, offset } = model.Product.getPagination(page, size);
    const categId = req.params.categId;
    model.Product.findAndCountAll({
        where: {CategorieProductId: categId},
        limit,
        offset,
        attributes: ['id','name', 'price', 'description','image','note','createdAt','updatedAt'],
        include: [{
            model: model.Info_product,
            attributes: ['hauteur', 'profondeur','longueur','couleur']
        }]
    }).then(result => {
        const response  = model.Product.getPagingData(result, page, limit);
        res.status(200).json(response);
    }).catch(error => {
        console.log(error)
        res.status(500).json(error);
    });
}
