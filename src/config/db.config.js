const Sequelize = require('sequelize')

const sequelize = new Sequelize('products','root','12345678',{
    host:'localhost',
    dialect:'mysql'
})


sequelize.authenticate()
.then(()=>{
    console.log('conexion ok')
})
.catch(error =>{
    console.log('error de conexion'+ error)
})



module.exports = sequelize

//conexion  a db