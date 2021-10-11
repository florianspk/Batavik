//* Retrieve all data
exports.findAll = (req, res) => {
  res.status(200).send({
    message: 'tout les commentaires',
  });
  };

exports.findProductComment = (req, res) => {
  res.status(200).send({
    message: 'les commantaire du produit id ' + req.params.id,
  });
  };

  /**
 * @openapi
 * /users:
 *   get:
 *     security:
 *       - jwt: []
 *     tags:
 *       - RemoveOne
 *     description: Supprimer un commentaire
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               properties: 
*                  message:
*                    type: string
*                  example:       # Sample data
*                    message: modification accepter
 *       401:
 *         description: Not authenticated, you need to pass a Bearer in header
 */

/* GET home page. */
exports.removeOne = (req, res) => {
  res.status(200).send({
    message: 'supprime le commentaire ' + req.params.id,
  });
  };

  




