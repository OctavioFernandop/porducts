const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('hola carlos')
})

router.put('/',(req, res)=>{
res.send('products')
})


router.post('/', (req, res )=>{
    res.send('producs')
})


router.delete('/', (req, res)=>{
    res.send('products')
})

module.exports = router