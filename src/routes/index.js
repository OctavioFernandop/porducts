const { Router } = require('express')
const productsRouter = require('./products.route')

const routes = () => {
  const router = Router()

  router.use('/products', productsRouter)

  return router
}

module.exports = routes