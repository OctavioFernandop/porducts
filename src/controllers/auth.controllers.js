const jwt = require('jsonwebtoken')

const userModel = require('../models/user.model')

const Controller = {}

Controller.createTken = async (req, res) => {
  const {
    body: { email, password },
  } = req
  console.log('body => ', { email, password })

  // 1 VALIDAR QUE EL USUARIO EXISTA
  const user = await userModel.findOne({ where: { email } })
  console.log('user => ', user)

  if (!user) {
    res.status(400).send('USER NOT FOUND')
    return
  }

  // 2 VALIDA QUE LA CONTRASEÑA SE A CORRECTA
  const {
    dataValues: { password: userPassword },
  } = user
  if (userPassword !== password) {
    res.status(401).send('BAD CREDENTIALS')
    return
  }

  // 3 GENERAR EL TOKEN DE SESION
  jwt.sign({ user }, 'secretkey', (error, token) => {
    console.log('token => ', token)
    res.status(200).json({ token })
  })
}

module.exports = Controller
