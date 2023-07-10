const express = require('express')
const productsRouter = express.Router()

productsRouter.get('/', (req, res)=>{
    res.send('este es el metodo get')
})

productsRouter.put('/',(req, res)=>{
  res.send('este es el metodo put')
})


productsRouter.post('/', (req, res )=>{
  res.send('este es el metodo post')
})


productsRouter.delete('/', (req, res)=>{
  res.send('este es el metodo delete')
})

module.exports = productsRouter