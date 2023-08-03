const { Router } = require('express')
const productsRouter = require('./products.route')
const userRoute = require('./user.route')
const authRouter = require('./auth.route')

const routes = () => {
  const router = Router()
  router.use('/user', userRoute)
  router.use('/products', productsRouter)
  router.use('/auth', authRouter)
  return router
}
module.exports = routes
