const model = require('../models');
require('dotenv').config();
const Product = model.Product;

// Image upload
const multer = require("multer")
const path = require('path');


exports.getProducts = (req, res, next) => {
    const {page, size} = req.query;
    const {limit, offset} = Product.getPagination(page, size);
    Product.findAndCountAll({
        attributes: ['id', 'name', 'price', 'description', 'image', 'note', 'categId', 'createdAt', 'updatedAt'],
        limit,
        offset,
        include: [{
            model: model.Info_product,
            attributes: ['hauteur', 'profondeur', 'longueur', 'couleur'],
            required: true
        }, {
            model: model.Categorie_product,
            as: "categ",
            attributes: ['id', 'name'],
            required: true
        }]
    }).then(result => {
        const response = Product.getPagingData(result, page, limit)
        res.status(200).json(response);
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
        attributes: ['name', 'price', 'description', 'image', 'note', 'categId', 'createdAt', 'updatedAt'],
        include: [{
            model: model.Info_product,
            attributes: ['hauteur', 'profondeur', 'longueur', 'couleur'],
            required: true
        }, {
            model: model.Categorie_product,
            as: "categ",
            attributes: ['id', 'name'],
            required: true
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
        console.log(typeof  req.body.price)
        if (typeof  req.body.price !== "string"){
            res.status(405).json("Not a valid Name")
            return
        }else{
            price = req.body.price;
        }
        if(req.body.description !== "string"){
            res.status(405).json("Not a valid Name")
            return
        }else{
            description = req.body.description

        }
        let note = 0;
        let image = req.file ? req.file.path : null;
        let idCateg = req.body.categId
        let hauteur = req.body.hauteur ? req.body.hauteur : null;
        let profondeur = req.body.profondeur ? req.body.profondeur : null;
        let longueur = req.body.longueur ? req.body.longueur : null;
        let couleur = req.body.couleur ? req.body.couleur : null;
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
                note: note,
                createdAt: Date.now(),
                updatedAt: Date.now(),
                categId: idCateg,
            },{
                transaction: t
            });
            let prod_id = productResult.id
            //insert a record in info, but results will not be saved permanently
            const infoResult = await model.Info_product.create({
                hauteur: hauteur,
                profondeur: profondeur,
                longueur: longueur,
                couleur: couleur,
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

