var express = require('express');
var router = express.Router();


/**
 * @openapi
 * /commentaire:
 *   get:
 *     security:
 *       - jwt: []
 *     tags:
 *       - commentaire
 *     description: Get all comentaire in database
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/UsersList'
 *       401:
 *         description: Not authenticated, you need to pass a Bearer in header
 */
router.get('/', function(req, res, next){
    res.json({"test":req.headers.test})
})

router.get('/', function(req, res, next){
    res.json({"test":req.headers.test})
})



module.exports = router;