const model = require('../models');

exports.getCategList = (req, res, next) => {
    const {page, size} = req.query;
    const {limit, offset} = model.Categorie_product.getPagination(page, size);
    model.Categorie_product.findAll({
        limit,
        offset,
        attributes: ['name', 'id'],
    }).then(result => {
        model.Categorie_product.count().then(count => {
            const response = model.Categorie_product.getPagingData(result, count, page, limit)
            res.status(200).json(response);
        })

    }).catch(error => {
        console.log(error)
        res.status(500).json(error);
    });
}


exports.getProductCateg = (req, res, next) => {
    const {page, size} = req.query;
    const {limit, offset} = model.Product.getPagination(page, size);
    const categId = req.params.categId;
    model.Product.findAll({
        where: {categId: categId},
        limit,
        offset,
        attributes: ['id', 'name', 'price', 'description', 'image', 'rate', 'createdAt', 'updatedAt'],
        include: [{
            model: model.Info_product,
            attributes: ['height', 'depth', 'width', 'color'],
            as: "info",
        }]
    }).then(result => {
        model.Product.count({
            where: {categId: categId}
        }).then(count => {
            const response = model.Categorie_product.getPagingData(result, count, page, limit);
            res.status(200).json(response);
        })
    }).catch(error => {
        console.log(error)
        res.status(500).json(error);
    });
}
