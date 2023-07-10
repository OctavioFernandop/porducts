const express = require('express')
const routes = express.Router()
const products = {}

routes.get('/', (req, res)=>{
    res.send('products')
})

routes.put('/',(req, res)=>{
    res.send(products)
})


routes.post('/', (req, res )=>{
    res.send(products)
})


routes.delete('/products', (req, res)=>{

    res.send(products)
})

module.exports = routes