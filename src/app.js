const express = require('express')
const mysql = require('mysql')
const routes = require('./routes')
const app = express()
app.use(express.json())
const sequelize = require('sequelize')

  const seq = new sequelize('products','root','12345678',{
    host:'localhost',
    dialect:'mysql'
})

const booksModel = seq.define('books',{
    'id':{type:sequelize.INTEGER, primaryKey:true},
    'titulo': sequelize.STRING,
    'autor': sequelize.STRING
})

seq.authenticate()
.then(()=>{
    console.log('conexion ok')
})
.catch(error =>{
    console.log('error de conexion'+ error)
})




booksModel.findAll({atributes:['titulo', 'autor']})
.then(bookss =>{
    const resultado = JSON.stringify(books)
    console.log(resultado)
})
.catch(error =>{
    console.log(error)
})

app.set('port', process.env.PORT || 4000)
app.use(routes())
app.listen(app.get('port'), () => {
    console.log('corriendo en el puerto', app.get('port'))
})
