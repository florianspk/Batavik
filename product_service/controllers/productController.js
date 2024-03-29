const model = require('../models');
require('dotenv').config();
const Product = model.Product;
const Sequelize = require("sequelize")
// Image upload
const multer = require("multer")
const path = require('path');


exports.getProducts = (req, res, next) => {
    const {page, size} = req.query;
    const {limit, offset} = Product.getPagination(page, size);
    Product.findAll({
        attributes: ['id', 'name', 'price', 'description', 'image', 'rate', 'categId', 'createdAt', 'updatedAt'],
        limit,
        offset,
        include: [{
            model: model.Info_product,
            attributes: ['height', 'depth', 'width', 'color'],
            as: "info",
        }],
    }).then(result => {
        Product.count().then(count => {
            const response = Product.getPagingData(result, count, page, limit)
            res.status(200).json(response);
        })
    }).catch(error => {
        console.log(error)
        res.status(500).json(error);
    });
}


exports.getProduct = (req, res, next) => {
    let idProduct = req.params.productId;
    Product.findOne({
        where: {
            id: idProduct
        },
        attributes: ['name', 'price', 'description', 'image', 'rate', 'categId', 'createdAt', 'updatedAt'],
        include: [{
            model: model.Info_product,
            attributes: ['height', 'depth', 'width', 'color'],
            as: "info"
        }]
    }).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        console.log(error)
        res.status(500).json(error);
    });
}

// Add new Product
// Argument Invalide
exports.newProduct = async (req, res, next) => {
    let Info_product = model.InfoProduct;
    try {
        let name, price, description;
        if (typeof req.body.name !== "string") {
            res.status(405).json("Not a valid Name")
            return
        } else {
            name = req.body.name;
        }

        price = req.body.price;

        if (typeof req.body.description !== "string") {
            res.status(405).json("Not a valid description")
            return
        } else {
            description = req.body.description
        }
        let rate = req.body.rate || 0;
        let image = req.file ? req.file.path : null;
        let idCateg = req.body.categId
        let height = req.body.height ? req.body.height : null;
        let depth = req.body.depth ? req.body.depth : null;
        let width = req.body.width ? req.body.width : null;
        let color = req.body.color ? req.body.color : null;
        let t;
        try {
            //Start transaction
            t = await model.sequelize.transaction();
            //insert a record in product, but results will not be saved permanently
            const productResult = await Product.create({
                name: name,
                price: price,
                description: description,
                image: (image) ? image : null,
                rate: rate,
                createdAt: Date.now(),
                updatedAt: Date.now(),
                categId: idCateg,
            }, {
                transaction: t
            });
            let prod_id = productResult.id
            //insert a record in info, but results will not be saved permanently
            const infoResult = await model.Info_product.create({
                height: height,
                depth: depth,
                width: width,
                color: color,
                ProductId: prod_id,
                createdAt: Date.now(),
                updatedAt: Date.now()
            }, {
                transaction: t
            })
            await t.commit();
            res.status(200).json({product: productResult, info: infoResult});
        } catch (exception) {
            t.rollback();
            res.status(400).json(exception.message);
        }
    } catch (exception) {
        res.status(410).json(exception.message);
    }
}

exports.delProduct = (req, res, next) => {
    let idProduct = req.params.productId;
    Product.destroy({
        where: {id: idProduct}
    }).then(result => {
        res.status(200).json(result)
    }).catch(error => {
        console.log(error)
        res.status(500).json("An error occured")
    })
}

exports.updateProduct = async (req, res, next) => {
    let idProduct = req.params.productId;
    let t;
    try {

        t = await model.sequelize.transaction();

        const userUpdate = await Product.findOne({
            where: {id: idProduct}
        }).then(product => {
            let name = req.body.name ? req.body.name : product.getDataValue("name");
            let price = req.body.price ? req.body.price : product.getDataValue("price");
            let description = req.body.description ? req.body.description : product.getDataValue("description");
            let rate = req.body.rate ? req.body.rate : product.getDataValue("rate");
            let image = req.file ? req.file.path : product.getDataValue("file");
            if (product) {
                product.update({
                    name: name,
                    price: price,
                    description: description,
                    image: image,
                    rate: rate,
                    updatedAt: Date.now(),
                }, {
                    transaction: t
                })
            }
        })
        const infoUpdate = await model.Info_product.findOne({where: {productId: idProduct}}).then(info_product => {
            let height = req.body.height ? req.body.height : info_product.getDataValue("height");
            let depth = req.body.depth ? req.body.depth : info_product.getDataValue("depth");
            let width = req.body.width ? req.body.width : info_product.getDataValue("width");
            let color = req.body.color ? req.body.color : info_product.getDataValue("color");
            if (info_product) {
                info_product.update({
                    height: height,
                    depth: depth,
                    width: width,
                    color: color,
                    updatedAt: Date.now()
                }, {
                    transaction: t
                })
            }
        })
        await t.commit()
        //TODO a modifier plus tard et ressortir le produit avec ses infos
        res.status(200).json({"status": "success", "message": "The Product was been modified"})
    } catch (e) {
        t.rollback();
        return res.status(400).json(e.message)
    }


}

// Upload my Image for a Product

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

exports.upload = multer({
    storage: storage,
    limits: {
        fileSize: (process.env.MAX_UPLOAD) ? process.env.MAX_UPLOAD : '5000000'
    },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimeType && extname) {
            return cb(null, true)
        }
        cb("Give proper files formate to upload")
    }
}).single('image')

exports.topProducts = (req, res, next) => {
    const {page, size} = req.query;
    const {limit, offset} = Product.getPagination(page, size);
    Product.findAll({
        attributes: ['id', 'name', 'price', 'description', 'image', 'rate', 'categId', 'createdAt', 'updatedAt'],
        limit,
        offset,
        include: [{
            model: model.Info_product,
            attributes: ['height', 'depth', 'width', 'color'],
            as: "info",
        }],
        order: Sequelize.literal('rand()')
    }).then(result => {
        Product.count().then(count => {
            const response = Product.getPagingData(result, count, page, limit)
            res.status(200).json(response);
        })

    }).catch(error => {
        console.log(error)
        res.status(500).json(error);
    });
}

exports.bestProducts = (req, res, next) => {
    const {page, size} = req.query;
    const {limit, offset} = Product.getPagination(page, size);
    Product.findAll({
        attributes: ['id', 'name', 'price', 'description', 'image', 'rate', 'categId', 'createdAt', 'updatedAt'],
        limit,
        offset,
        include: [{
            model: model.Info_product,
            attributes: ['height', 'depth', 'width', 'color'],
            as: "info",
        }],
        order: Sequelize.literal('rand()')
    }).then(result => {
        Product.count().then(count => {
            const response = Product.getPagingData(result, count, page, limit)
            res.status(200).json(response);
        })

    }).catch(error => {
        console.log(error)
        res.status(500).json(error);
    });
}

exports.searchProduct = (req, res, next) => {
    const name = req.body.name ? req.body.name : "";
    const minprice = req.body.minprice ? req.body.minprice : 0;
    //TODO trouver une solution pour le max price
    const maxprice = req.body.maxprice ? req.body.maxprice : 9999999999999999999999999999;
    console.log(maxprice)
    const {page, size} = req.query;
    const {limit, offset} = Product.getPagination(page, size);
    Product.findAll({
        limit,
        offset,
        where: {
            [Sequelize.Op.and]: [
                {name: {[Sequelize.Op.like]: `%${name}%`}},
                {price: {[Sequelize.Op.between]: [minprice,maxprice]}},
            ]
        },
        include: [{
            model: model.Info_product,
            attributes: ['height', 'depth', 'width', 'color'],
            as: "info",
        }]
    }).then(result => {
        Product.count({
            where: {
                [Sequelize.Op.and]: [
                    {name: {[Sequelize.Op.like]: `%${name}%`}},
                    {price: {[Sequelize.Op.between]: [minprice,maxprice]}},
                ]
            }
        }).then(count => {
            const response = Product.getPagingData(result, count, page, limit)
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).json(error);
        })
    }).catch(error => {
        res.status(400).json(error);
    })
}
