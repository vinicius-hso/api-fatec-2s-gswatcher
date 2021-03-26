const dadosjira = require('./app/dadosJSON/jira.json')
const dadostrello = require('./app/dadosJSON/trello.json')
const dados = dadostrello.concat(dadosjira)


// Buscando card pelo status final
function projetosFinalizados(input) {
    let inputstats = input
    const finalizado = dados => dados.finished == inputstats || dados.isFinished == inputstats // buscando por card já finalizados

    return dados.filter(finalizado)
}



// buscando pelo projeto especifico
function buscandoProjeto(input) {
    let inputprojeto = input
    const projeto = projeto => projeto.project ==  inputprojeto 

    return dados.filter(projeto)
}



// Buscando por card com o programador X
function programador(nome, sobrenome) {
    let inputnome = nome[0].toLocaleUpperCase() + nome.slice(1) + sobrenome[0].toLocaleUpperCase() + sobrenome.slice(1) // definindo letras maiusculas, para evitar erro de busca.
    const buscandoprogramador = nome => nome.user.first_name + nome.user.last_name == inputnome
    
    return dados.filter(buscandoprogramador)
}



// buscando numero de card especifico.
function cardID(input) {
    // cardjira = '0db2dfdc-a4b8-4055-b2ad-6655c06a7663' // cardtrello = "0ac33506-5610-418f-9b7b-fe9eaacf4f53"
    let inputcard = input
    const numerodocard = n => n.id == inputcard || n._id == inputcard

    return dados.filter(numerodocard)
}



// projetosFinalizados(false)
// cardID("0ac33506-5610-418f-9b7b-fe9eaacf4f53")
// programador('Antônio', 'Nogueira')
// buscandoProjeto("[Souza Comércio e Associados] - Innovative background implementation")




module.exports = { dados, buscandoProjeto, programador, cardID }