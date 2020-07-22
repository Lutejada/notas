const express = require('express')
const path = require('path')

//inicializaciones
const app = express()

//setings
app.set('port', process.env.port || 4000);
app.set('views', path.join(__dirname, 'views')); //para enrutar la carpeta de views porque esta dentro de src

//middlewares
app.use(express.urlencoded({ extended: false }))

//variables globales


//routes
app.get('/', (req, res) => {
    res.send('hello word')
})

//statics 
app.use(express.static(path.join(__dirname, 'public'))); // se enruta la carpeta public







module.exports = app