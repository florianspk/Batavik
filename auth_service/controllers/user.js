const bcrypt = require("bcryptjs"),
    jwt = require('jsonwebtoken'),
    db = require("../models/index"),
    JWT_SECRET = process.env.JWT_SECRET

// Image upload
const multer = require("multer")
const path = require('path');

exports.signUp = async (req, res) => {
    console.log(req.body)
    const {firstname,lastname, email, password: plainTextPassword} = req.body;
    const image = req.file.path
    const enabled = 1
    //Then we have to hashed the password so no one can see it from database.
    const password = await bcrypt.hash(plainTextPassword, 10)
    const user = await db.User.create({
        firstname,
        lastname,
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
    console.log(req.body)
    const {email, password} = req.body;
    const userVal = await db.User.findOne({where: {email: email}})
    if (!userVal) {
        return res.status(401).json({status: 'error', error: 'Invalid email/password'})
    }
    //TODO modifier last login
    if (await bcrypt.compare(password, userVal.password)) {
        const payload = {id: userVal.id, username: userVal.email};
        const options = {expiresIn: '2d'};
        const secret = JWT_SECRET;
        const token = jwt.sign(payload, secret, options)
        const user = await db.User.findOne({where: {email: email}, attributes: ['firstname','lastname','email','enabled','image']})
        return res.status(200).json({user, token})
    }
    return res.status(401).json({"status": "error", "message": "Invalid email/Password"})
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