const express = require('express')
const router = express.Router()
const swaggerUi = require('swagger-ui-express')
const {getSwaggerSpec} = require('./swaggerSpec')

module.exports = router
module.exports.initSwagger = async function() {
  const swaggerSpec = await getSwaggerSpec()
  router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {explorer: true}))
  router.get('/swagger.json', async (req, res) => {
    res.json(swaggerSpec)
  })
}