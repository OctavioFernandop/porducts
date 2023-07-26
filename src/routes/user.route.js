const express = require('express')
const createUser = require('../repository/user.repository')
const controller = require('../controllers/user.cotrollers')
const userRoute = express.Router()
const  validateUser  = require('../validators/validators.user')


userRoute.get('/', (req, res) => {
    
    res.send('hola user')
})

userRoute.put('/',(req, res) => {

    res.send('metodo put')
})

userRoute.post('/', validateUser, controller.createUserControllers)

userRoute.delete('/', (req, res) => {

    res.send(' este es el metodo delete')

})

module.exports = userRoute