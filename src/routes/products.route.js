const express = require('express')
const controller = require('../controllers/products.controllers')
const { validateProduct } = require('../validators/validators.products')
const productsRouter = express.Router()

productsRouter.get('/', async (req, res) => {
  res.send('hola mundo')
})

productsRouter.put('/', (req, res) => {
  res.send('este es el metodo put')
})

productsRouter.post('/', validateProduct, controller.createProductController)

productsRouter.delete('/', (req, res) => {
  res.send('este es el metodo delete')
})

module.exports = productsRouter
