const model = require('../models');
require('dotenv').config();


// Image upload
const multer = require("multer")
const path = require('path');

exports.getProducts = (req, res, next) => {
    const {page, size} = req.query;
    const {limit, offset} = model.Product.getPagination(page, size);
    model.Product.findAndCountAll({
        attributes: ['id', 'name', 'price', 'description', 'image', 'note', 'CategorieProductId', 'createdAt', 'updatedAt'],
        limit,
        offset,
        include: [{
            model: model.Info_product ,
            attributes: ['hauteur', 'profondeur', 'longueur', 'couleur']
        },{
            model: model.Categorie_product,
            attributes: ['id', 'name']
        }]
    }).then(result => {
        const response = model.Product.getPagingData(result, page, limit)
        res.status(200).json(response);
    }).catch(error => {
        console.log(error)
        res.status(500).json(error);
    });
}
exports.getProduct = (req, res, next) => {
    let idProduct = req.params.productId;
    model.Product.findOne({
        where: {
            id: idProduct
        },
        attributes: ['name', 'price', 'description', 'image', 'note', 'CategorieProductId', 'createdAt', 'updatedAt'],
        include: [{
            model: model.Info_product,
            attributes: ['hauteur', 'profondeur', 'longueur', 'couleur']
        },{
            model: model.Categorie_product,
            attributes: ['id', 'name']
        }]
    }).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        console.log(error)
        res.status(500).json(error);
    });
}

// Add new Product

exports.newProduct = (req, res, next) => {

    let name = req.body.name;
    let price = req.body.price;
    let description = req.body.description;
    let note = 0;
    let image = req.file ? req.file.path : null;

    model.Product.create({
        name: name,
        price: price,
        description: description,
        image: (image) ? image : null,
        note: note,
        createdAt: Date.now(),
        updatedAt: Date.now(),
    }).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        console.log(error)
        res.status(500).json("An error occured");
    });
}

exports.delProduct = (req, res, next) => {
    let idProduct = req.params.productId;
    model.Product.destroy({
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
    model.Product.findOne({where: {id: idProduct}})
        .then(product => {
            let name = req.body.name ? req.body.price : product.getDataValue("name");
            let price = req.body.price ? req.body.price : product.getDataValue("price");
            let description = req.body.description ? req.body.description : product.getDataValue("description");
            let note = req.body.note ? req.body.note : product.getDataValue("note");
            let image = req.file ? req.file.path : product.getDataValue("file");
            if (product) {
                product.update({
                    name: name,
                    price: price,
                    description: description,
                    image: image,
                    note: note,
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


