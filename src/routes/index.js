const { Router } = require('express')
const productsRouter = require('./products.route')
const userRoute = require('./user.route')
 

const routes = () => {
  const router = Router()
  router.use('/user', userRoute)
  router.use('/products', productsRouter)
  return router
}

module.exports = routes