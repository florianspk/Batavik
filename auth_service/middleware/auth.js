const jwt = require('jsonwebtoken');

module.exports = {
    validateToken: async (req, res, next) => {
        const authHeader = req.headers.authorization;
        if (authHeader) {
            const token = authHeader.split(' ')[1];
            try {
                const result = await jwt.verify(token, process.env.JWT_SECRET)
                req.decoded = result;
                next()
            } catch (error) {
                return res.status(401).json({"status": "error", "message": "Invalid Authentication.", error})
            }
        } else {
            return res.status(401).json({"status": "error", "message": "Authentication error. Token required."})
        }
    },validateExternalToken: async (req, res, next) => {
        const authHeader = req.headers.authorization;
        if (authHeader) {
            const token = authHeader.split(' ')[1];
            try {
                const result = await jwt.verify(token, process.env.JWT_SECRET)
                req.decoded = result;
                return res.status(200).json(result)
            } catch (error) {
                return res.status(401).json({"status": "error", "message": "Invalid Authentication.", error})
            }
        } else {
            return res.status(401).json({"status": "error", "message": "Authentication error. Token required."})
        }
    }






}