const productModel = require("../models/products.model");

const createProduct = async () =>{
    try {
        return await productModel.create({sku: 'skuu', name: 'name', price: 20.12 })
    } catch (error) {
        console.log('ERROR', error)
    }
}
//se utilizo el metodo create para ingresar los datos  a la base de datos
module.exports = {
    createProduct
}

