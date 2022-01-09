const model = require("../models")
const Sequelize = require("sequelize")
const Adress = model.Adress;

module.exports = {
    getAllAdressInACity(req, res, next) {
        Adress.findAll({
            where: {cityId: req.params.idCity},
            include: [
                {
                    model: model.City,
                    as: "City"
                }
            ]
        }).then(response => {
            res.status(200).json(response)
        }).catch(error => {
            res.status(401).json(error)
        })
    },
    deleteAdressFromId(req, res, next) {
        Adress.delete({where: req.params.idAdress}).then(response => {
            res.status(200).json(response)
        }).catch(error => {
            res.status(401).json(error)
        })
    }, editAdressFromId(req, res, next) {

    }
}
