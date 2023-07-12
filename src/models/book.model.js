const Sequelize = require('sequelize')
const sequelize = require('../config/db.config')

const bookModel = sequelize.define(
    'books',
    {
        id: {type: Sequelize.INTEGER, primaryKey:true},
        titulo: Sequelize.STRING,
        autor: Sequelize.STRING
    },
    {
        timestamps: false
    }
)

module.exports = bookModel

//se importo el module.export sequelize(conexion a d b) para poder crear la tabla

// si importa sequealize para tener conexion y poder cerar las tablas