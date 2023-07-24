const express = require('express')
// const { getBooks } = require('../repository/book.respository')
const { createProduct } = require('../repository/products.repository')
const controller = require('../controllers/products.controllers')
const { validateProduct } = require('../validators/validators.products')
const productsRouter = express.Router()

// const token = require('../controllers/products.controllers')

productsRouter.get('/', async (req, res)=> {
  res.send('hola mundo')
  res.status(200).send(products)
})

// se impporto el getnooks para obtener informacion

productsRouter.put('/',(req, res)=>{
  res.send('este es el metodo put')
})


productsRouter.post('/', validateProduct,  controller.createProductController)


productsRouter.delete('/', (req, res)=>{
  res.send('este es el metodo delete')
})

module.exports = productsRouter