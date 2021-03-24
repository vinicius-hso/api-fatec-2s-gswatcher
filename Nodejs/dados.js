const dadosjira = require('./app/dadosJSON/jira.json')
const dadostrello = require('./app/dadosJSON/trello.json')
const dados = dadostrello.concat(dadosjira)

let inputstats = false
const finalizado = dados => dados.finished == inputstats // buscando por card já finalizados



let inputprojeto = "[Souza Comércio e Associados] - Innovative background implementation"
const projeto = projeto => projeto.project ==  inputprojeto // buscando pelo projeto souza comércio



const nomeEsobrenome = function(nome, sobrenome) {
    return nome[0].toLocaleUpperCase() + nome.slice(1) + sobrenome[0].toLocaleUpperCase() + sobrenome.slice(1) // definindo letras maiusculas, para evitar erro de busca.
}

let inputnome = nomeEsobrenome('gustavo', 'santos')
const programador = nome => nome.user.first_name + nome.user.last_name == inputnome




// cardjira = '0db2dfdc-a4b8-4055-b2ad-6655c06a7663' // cardtrello = '261fe1be-db29-4c0c-b423-ea964ff4fbb0'
let inputcard = '0db2dfdc-a4b8-4055-b2ad-6655c06a7663'
const numerodocard = n => n.id == inputcard




// console.log(dados)
// console.log(dados.filter(programador))
// console.log(dados.filter(projeto))
// console.log(dados.filter(numerodocard))


module.exports = { finalizado, projeto, programador, numerodocard, dados }
