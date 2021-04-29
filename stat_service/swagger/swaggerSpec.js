const swaggerJSDoc = require("swagger-jsdoc")
const pathfs = require('path')
const walker = require('./walker')

module.exports = {
  async getSwaggerSpec() {
    /**
     * Documentation
     */
    const options = {
      definition: {
        openapi: '3.0.0',
        info: {
          title: `API ${require('../package.json').name}`,
          version: require('../package.json').version,
        },
      },
      apis: await walker.import(pathfs.resolve(__dirname, '..'))
    }
    const swaggerSpec = swaggerJSDoc(options)
    return swaggerSpec 
  }
}
