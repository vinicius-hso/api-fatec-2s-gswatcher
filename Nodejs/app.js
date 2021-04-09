const app = require('./server/server'), port = process.env.PORT || 3000
const dados = require('./dados')

const creating_tables = require('./models/creating_tables')
const populating = require('./models/populating_db')



// let resposta = populating(dados)
// console.log(resposta)


app.get('/', (req, res) => {
    res.json({info: 'Node.js, Express, and Postgres API'})
})

app.listen(port, () => {
    console.log(`Servidor rodando na url: localhost:${port}.`)
})