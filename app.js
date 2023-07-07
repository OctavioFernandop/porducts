const express = require('express')

app = express()

app.set('port', process.env.PORT || 4000)

// app.get('/', (req, res)=>{
//     res.send("welcome ")
// })


app.listen(app.get('port'), () => {
    console.log('corriendo en el puerto', app.get('port'))
})
