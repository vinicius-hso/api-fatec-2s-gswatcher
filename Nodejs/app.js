const app = require('./config/server')
const port = 3000

const rotahome = require('./app/routes/home')
rotahome(app)

app.listen(port, () => {
    console.log(`Servidor rodando com Express na porta: ${port}.`)
})
