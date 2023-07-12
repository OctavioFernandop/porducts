const Sequelize = require("sequelize");
const sequelize = require("../config/db.config");

const  productModel = sequelize.define(
    'products',
    {
     sku: {type: Sequelize.STRING, primaryKey: true},
     name: Sequelize.STRING,
     price: Sequelize.DECIMAL
    },
    {
        timestamps: false
    }
)

module.exports = productModel