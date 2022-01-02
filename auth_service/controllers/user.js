const bcrypt = require("bcryptjs"),
    jwt = require('jsonwebtoken'),
    db = require("../models/index"),
    JWT_SECRET = process.env.JWT_SECRET

// Image upload
const multer = require("multer")
const path = require('path');

exports.signUp = async (req, res) => {
    const {firstname, username, email, password: plainTextPassword} = req.body;
    const image = req.file.path
    const enabled = 1
    //Then we have to hashed the password so no one can see it from database.
    const password = await bcrypt.hash(plainTextPassword, 10)
    const user = await db.User.create({
        firstname,
        username,
        email,
        password,
        image,
        enabled
    }).then(result => {
        res.status(201).json(result)
    }).catch(error=>{
        res.status(401).json({ "status": "error", "message": error.errors[0].message })
    })

}

exports.signIn = async (req, res) => {
    const {email, password} = req.body;
    const user = await db.User.findOne({where: {email: email}})
    if (!user) {
        return res.status(401).json({status: 'error', error: 'Invalid username/password'})
    }
    if (await bcrypt.compare(password, user.password)) {
        const payload = {id: user.id, username: user.email};
        const options = {expiresIn: '2d', issuer: 'http://localhost:8080'};
        const secret = JWT_SECRET;
        const token = jwt.sign(payload, secret, options)
        return res.status(200).json({status: 'ok', "message": "User signin successful", token})
    }
    return res.status(401).json({"status": "error", "message": "Invalid Username/Password"})
}
exports.getUsers = async (req, res) => {
    try {
        const users = await db.User.findAll()
        return res.status(200).json({status: 'ok', users})
    } catch (error) {
        return res.status(401).json({"status": "error", error})
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