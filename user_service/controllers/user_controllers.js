const model = require("../models")
const Sequelize = require("sequelize")
const User = model.User;
const axios = require("axios")

module.exports = {
    getAllUser(req, res, next) {
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
                    as: "City"
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
        const config = {
            headers: {authorization: req.headers.authorization}
        };
        axios.get("http://localhost:3010/api/auth/user", config).then(response => {
            User.findAll({
                where: {id: response.data.id},
                attributes: {exclude: ["password"]},
                include: [{
                    model: model.Adress,
                    as: "Adress",
                    include: [{
                        model: model.City,
                        as: "City"
                    }]
                }]
            }).then(result => {
                res.status(200).json(result);
            }).catch(error => {
                res.status(401).json(error.message)
            })
        }).catch(error => {
            return res.status(401).json({"status": "error", "message": "Invalid Authentication.", error})
        })
    },
    async deleteCurrentUser(req, res, next) {
        const config = {
            headers: {authorization: req.headers.authorization}
        };
        try {
            const idCurrentuser = await axios.get("http://localhost:3010/api/auth/user", config);
            console.log()
            const idupdateUser = (await (await User.findByPk(idCurrentuser.data.id)).update({
                enabled: 0,
            })).getDataValue("id")
            User.findOne({
                where: {id: idupdateUser},
                attributes: {exclude: ["password"]},
                include: [{
                    model: model.Adress,
                    as: "Adress",
                    include: [{
                        model: model.City,
                        as: "City"
                    }]
                }]
            }).then(result => {
                res.status(200).json(result);
            }).catch(error => {
                res.status(401).json(error.message)
            })
        }catch (e){
            res.status(401).json(e.message)
        }
    },
    editCurrentUser(req, res, next) {
        //TODO
    },
    getOneUser(req, res, next) {
        try {
            const idUser = req.params.idUser
            User.findOne({
                where: {id: idUser},
                attributes: {exclude: ["password"]},
                include: [{
                    model: model.Adress,
                    as: "Adress",
                    include: [{
                        model: model.City,
                        as: "City"
                    }]
                }]
            }).then(result => {
                res.status(200).json(result);
            }).catch(error => {
                res.status(401).json(error.message)
            })
        } catch (e) {
            res.status(401).json(e.message)
        }
    },
    editOneUser(req, res, next) {
        //TODO
    },
    deleteOneUser(req, res, next) {
        //TODO
    }
}