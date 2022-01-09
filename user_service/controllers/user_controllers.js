const model = require("../models")
const Sequelize = require("sequelize")
const User = model.User;

module.exports = {
    getAllUser(req,res,next){
        const {page, size} = req.query;
        const {limit, offset} = User.getPagination(page, size);
        User.findAll({
            attributes: {exclude: ["password"]},
            limit,
            offset,
            include: [{
                model: model.Adress,
                as: "Adress",
                include: [{
                    model: model.City,
                    as: "cityId"
                }]
            }]
        }).then(result => {
            User.count().then(count => {
                const response = User.getPagingData(result, count, page, limit)
                res.status(200).json(response);
            }).catch(error => {
                res.status(401).json(error.message)
            })
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