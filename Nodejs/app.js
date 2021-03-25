const app = require('./config/server'), port = 3000


const dados = require('./dados')
// console.log(dados)


app.get('/', (req, res) => res.send(programador('Antônio', 'Nogueira')))




app.listen(port, () => {
    console.log(`Servidor rodando com Express na url: localhost:${port}.`)
})