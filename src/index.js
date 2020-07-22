const app = require('./server')

app.listen(app.get('port'), () => {
    console.log('Server in port', app.get('port'))
})