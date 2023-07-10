const express = require('express')

const routes = require('./routes')
const app = express()
app.use(express.json())

app.set('port', process.env.PORT || 4000)

app.use(routes())

app.listen(app.get('port'), () => {
    console.log('corriendo en el puerto', app.get('port'))
})
