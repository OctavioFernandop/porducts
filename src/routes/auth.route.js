const express = require('express')

const validateUser = require('../validators/validators.user')

const controller = require('../controllers/user.cotrollers')

const Controller = require('../controllers/auth.controllers')

const authRouter = express.Router()

authRouter.get('/login', Controller.createTken)

authRouter.post('/registry', validateUser, controller.createUserControllers)

module.exports = authRouter
