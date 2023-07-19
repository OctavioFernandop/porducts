const { createProductRepository } = require("../repository/products.repository")
const controller = {}
// const token = {}
controller.createProductController =  async (req, res ) => {
    try {
      
      const productCreated = await createProductRepository(req.body) // creacion de datos en la db

      es.status(201).send(productCreated) // 201 simepre para crear
    } catch (error) {
      res.status(500).send(error) // de esta forma capturamos el error que pasa al momento de tratar de crear un producto
    }
  }

// controller.token = async (req, res) =>{
//   if(req.body.sku == 'fl343l447b' && req.body.name == 'dais' && req.body.price == 2 ){
//     const payload = {
//       check: true
//     }
//     const token = jwt.sing(payload, app.get('key'),{

//       expiresIn: '7d'
      
//     })
//     res.json({
//       message: 'autenticacion ok ',
//       token
//     })

//   } else{
//     res.json({
//       message: 'user o password incorrecto'
//     })
//   }
  
// }
//   module.exports = {token}
  module.exports = controller