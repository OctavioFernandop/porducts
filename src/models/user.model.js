const Sequelize = require('sequelize')
const sequelize = require('../config/db.config')

const userModel = sequelize.define(
  'users',
  {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    password: Sequelize.STRING,
    email: Sequelize.STRING
  },
  {
    timestamps: false
  }
)

module.exports = userModel
