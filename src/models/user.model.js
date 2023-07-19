const Sequelize = require('sequelize')
const sequelize = require('../config/db.config')

const userModel = sequelize.define(
    'usuario',
    { 
        email: Sequelize.STRING, 
        password: Sequelize.STRING
    },
    {
        timestamps: false
    }

)

module.exports = userModel