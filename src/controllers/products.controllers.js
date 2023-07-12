const { createProduct } = require("../repository/products.repository")
const controller = {}

controller.index =  async (req, res ) => {
    const productCreated = await createProduct() //conexion a db
    res.status(201).send(productCreated) // 201 simepre para crear
  }

  module.exports = controller