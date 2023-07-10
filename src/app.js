const express = require('express')
const app = express()
const {routes} = require('./routes/indexRoutes')
app.use(express.json())

app.set('port', process.env.PORT || 4000)

app.use(require('./routes/indexRoutes'))

app.listen(app.get('port'), () => {
    console.log('corriendo en el puerto', app.get('port'))
})
