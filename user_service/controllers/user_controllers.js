const model = require("../models")
const Sequelize = require("sequelize")
const User = model.User;

module.exports = {
    getAllUser(req,res,next){
        User.findAll({
            attributes: {exclude: ["password"]},
            include: [{
                model: model.Adress,
                as: "Adress",
                //TODO
                // include: [{
                //     model: model.City,
                //     as: "City"
                // }]
            }]
        }).then(response => {
            res.status(200).json(response)
        }).catch(error => {
            res.status(401).json(error.message)
        })
    },
    getCurrentUser(req, res, next) {

    },
    createUser(req, res, next) {
        let image, adress_name, adress_number, adress_additionalAdress, poastalCode, city_name;
        try {

        }catch (e){
            res.status(401).json(e.message)
        }

    },
    deleteCurrentUser(req, res, next) {

    },
    editCurrentUser(req, res, next) {

    }
}