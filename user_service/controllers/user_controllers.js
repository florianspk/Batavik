const sequelize = require("../models")

module.exports = {
    getCurrentUser(req, res, next) {

    },
    createUser(req, res, next) {
        console.log("toto")
        let firstanme, lastname, image, adress_name, adress_number, adress_additionalAdress, poastalCode, city_name,
            city_departement;

        if (typeof req.body.firstname === "string") {
            firstanme = req.body.firstname
        } else {
            return res.status(401).json("firstname is not valid")
        }
        if (typeof req.body.lastname === "string") {
            lastname = req.body.lastname
        } else {
           return  res.status(401).json("lastname is not valid")
        }
        if (typeof req.file) {

        }


    },
    deleteCurrentUser(req, res, next) {

    },
    editCurrentUser(req, res, next) {

    }
}