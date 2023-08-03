const productModel = require('../models/products.model')
const createProductRepository = async ({ sku, name, price }) => {
  console.log('data = ', { sku, name, price })
  try {
    return await productModel.create({ sku, name, price })
  } catch (error) {
    throw 'ERROR_TRY_TO_CREATE_A_PRODUCT'
  }
}

//se utilizo el metodo create para ingresar los datos  a la base de datos

module.exports = {
  createProductRepository,
}
