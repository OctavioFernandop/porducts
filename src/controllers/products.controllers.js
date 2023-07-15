const { createProductRepository } = require("../repository/products.repository")
const controller = {}
controller.createProductController =  async (req, res ) => {
    try {
      
      const productCreated = await createProductRepository(req.body) // creacion de datos en la db
      // if(productCreated == productCreated){
      //   res.send('error')
      // }
      
      res.status(201).send(productCreated) // 201 simepre para crear
    } catch (error) {
      res.status(500).send(error) // de esta forma capturamos el error que pasa al momento de tratar de crear un producto
    }
  }




  module.exports = controller