const express = require('express')
const routes = require('./routes')
// const jwt = require('jsonwebtoken')

// const key = require('./settings/keys')
// const keys = require('./settings/keys')

const app = express()
// app.set('key',keys.key)
app.use(express.json())
app.use(routes())
app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), () => {
    console.log('corriendo en el puerto', app.get('port'))
})
