const axios = require("axios")
module.exports = {

    validateToken: async (req, res, next) => {
        const config = {
            headers: { authorization: req.headers.authorization}
        };
        axios.get("http://localhost:3010/api/auth/validateToken",config).then(response => {
            if (response.status === 200){
                next();
            }else{
                return res.status(401).json({ "status": "error", "message": "Invalid Authentication." })
            }
        }).catch(error => {
            return res.status(401).json({ "status": "error", "message": "Invalid Authentication.", error })
        })
    }
}