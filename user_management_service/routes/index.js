const express = require('express');
const router = express.Router();

/**
 * @openapi
 * /users:
 *   get:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Users
 *     description: Get all users in database
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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
