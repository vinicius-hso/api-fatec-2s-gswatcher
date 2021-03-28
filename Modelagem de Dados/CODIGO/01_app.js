const app = require('./config/server'), port = 3000
const dados = require('./dados')


const bodyParser = require('body-parser')
const db = require('./creating_tables')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


var resposta = db();
console.log(resposta)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
    console.log(`Servidor rodando com Express na url: localhost:${port}.`)
})