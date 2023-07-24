const Sequelize = require('sequelize')
const sequelize = require('../config/db.config')

const  userModel = sequelize.define(
    'usuarios',
    {
     id:{type: Sequelize.STRING, primaryKey: true},
     password: Sequelize.STRING,
     email: Sequelize.STRING
    },
    {
        timestamps: false
    }
)

module.exports = userModel


