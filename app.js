const express = require('express')
app = express()
const routes = require('./routes')
app.use(express.json())

app.set('port', process.env.PORT || 4000)

app.use('/products', routes)

app.listen(app.get('port'), () => {
    console.log('corriendo en el puerto', app.get('port'))
})
