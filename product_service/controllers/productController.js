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
            attributes: ['height', 'depth', 'length', 'color'],
            as:"info",
        }],
    }).then(result => {
        Product.count().then(count =>{
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
            attributes: ['height', 'depth', 'length', 'color'],
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
        let name,price,description;
        if (typeof req.body.name !== "string") {
            res.status(405).json("Not a valid Name")
            return
        } else {
            name = req.body.name;
        }
        if (typeof  req.body.price !== "string"){
            res.status(405).json("Not a valid price")
            return
        }else{
            price = req.body.price;
        }
        if(typeof req.body.description !== "string"){
            res.status(405).json("Not a valid description")
            return
        }else{
            description = req.body.description
        }
        let rate = req.body.rate || 0;
        let image = req.file ? req.file.path : null;
        let idCateg = req.body.categId
        let height = req.body.height ? req.body.height : null;
        let depth = req.body.depth ? req.body.depth : null;
        let length = req.body.length ? req.body.length : null;
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
            },{
                transaction: t
            });
            let prod_id = productResult.id
            //insert a record in info, but results will not be saved permanently
            const infoResult = await model.Info_product.create({
                height: height,
                depth: depth,
                length: length,
                color: color,
                ProductId: prod_id,
                createdAt: Date.now(),
                updatedAt: Date.now()
            },{
                transaction: t
            })
            await t.commit();
            res.status(200).json(productResult);
        }catch (exception){
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

exports.updateProduct = (req, res, next) => {
    let idProduct = req.params.productId;
    Product.findOne({where: {id: idProduct}})
        .then(product => {
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
                }).then(result => {
                    res.status(200).json(result)
                }).catch(error => {
                    console.log(error)
                    res.status(405).json("An error occured when update product")
                })
            }
        }).catch(error => {
        res.status(401).json("The Product not exist")

    })
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
            attributes: ['height', 'depth', 'length', 'color'],
            as:"info",
        }],
        order: Sequelize.literal('rand()')
    }).then(result => {
        Product.count().then(count =>{
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
            attributes: ['height', 'depth', 'length', 'color'],
            as:"info",
        }],
        order: Sequelize.literal('rand()')
    }).then(result => {
        Product.count().then(count =>{
            const response = Product.getPagingData(result, count, page, limit)
            res.status(200).json(response);
        })

    }).catch(error => {
        console.log(error)
        res.status(500).json(error);
    });
}