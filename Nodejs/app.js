const app = require('./config/server'), port = 3000


// const dados = require('./dados')
// console.log(dados)


app.listen(port, () => {
    console.log(`Servidor rodando com Express na porta: ${port}.`)
})
