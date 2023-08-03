const { check } = require('express-validator')

const { validateResult } = require('../helpers/helpers.user')

const validateUser = [
  check('password').exists().isString().not().isEmpty(),

  check('email').exists().isEmail().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next)
  },
]

module.exports = validateUser
