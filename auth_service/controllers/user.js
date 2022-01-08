const bcrypt = require("bcryptjs"),
    jwt = require('jsonwebtoken'),
    db = require("../models"),
    JWT_SECRET = process.env.JWT_SECRET

exports.signUp = async (req, res) => {
    const {email, password: plainTextPassword} = req.body;
    const enabled = 1
    //Then we have to hashed the password so no one can see it from database.
    try {
        const password = await bcrypt.hash(plainTextPassword, 10)
        db.User.create({
            email,
            password,
            enabled
        }).then(result => {
            delete result["dataValues"]["password"]
            res.status(201).json(result)
        }).catch(error => {
            res.status(401).json({"status": "error", "message": error.message})
        })

    } catch (e) {
        res.status(401).json({"status": "error", "message": e.message})

    }

}

exports.signIn = async (req, res) => {
    const {email, password} = req.body;
    let userVal;
    try {
        userVal = await db.User.findOne({where: {email: email}})
    } catch (e) {
        return res.status(401).json({"status": "error", "message": e.message})
    }
    try {
        if (!userVal) {
            return res.status(401).json({status: 'error', error: 'Invalid email/password'})
        }
        if (await bcrypt.compare(password, userVal.password)) {
            const payload = {id: userVal.id, email: userVal.email};
            const options = {expiresIn: '1d'};
            const secret = JWT_SECRET;
            const token = jwt.sign(payload, secret, options)
            const user = await db.User.findOne({where: {email: email}, attributes: {exclude: ["password"]}})
            db.User.findOne({where: {email}}).then(resultuser => {
                resultuser.update({
                    lastLogin: Date.now()
                })
            })
            return res.status(200).json({user, token})
        }
    } catch (e) {
        return res.status(401).json({"status": "error", "message": e.message})
    }

}


exports.getCurrentUser = async (req, res, next) => {
    const id = req.decoded.id
    db.User.findOne({
        where: {id},
        attributes: {exclude: ["password"]}
    }).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json(error.message)
    })
}


