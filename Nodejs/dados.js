// chamando as funções:
const FuncUnique = require("./config/unique");
const FuncUniqueDev = require("./config/devs_unique");

// Dados
const dadosjira = require('./app/dadosJSON/jira.json')
dadosjira.forEach(dadosjira => {dadosjira['sistema'] = 1});
const dadostrello = require('./app/dadosJSON/trello.json')
dadostrello.forEach(dadostrello => {dadostrello['sistema'] = 2});

const dados = dadostrello.concat(dadosjira)


//Unificando os dados dos 2 arquivos
let sl = JSON.stringify(dados)
sl = sl.replace(/_id/g,'id');
sl = sl.replace(/userName/g,'first_name');
sl = sl.replace(/userLastName/g,'last_name');
sl = sl.replace(/userEmail/g,'email');
sl = sl.replace(/hours/g,'amountHours');
sl = sl.replace(/isFinished/g,'finished');
sl = JSON.parse(sl)

const dados_tratados = sl;

// Buscando todos os projetos existentes:
var tbl_project = FuncUnique(sl,'project');

// Buscando todos os status existetes:
var tbl_status = FuncUnique(sl,'status');

// Buscando todos os usuários existentes:  
var tbl_dev = FuncUniqueDev(sl);

module.exports = {dados, tbl_project, tbl_status, tbl_dev, dados_tratados}


/*
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


var sl = JSON.stringify(dados)
sl = sl.replace(/_id/g,'id');
sl = JSON.parse(sl)

// chamando as funções:
var FuncUnique = require("./unique");
var FuncUniqueDev = require("./devs_unique");

// Buscando todos os projetos existentes:
var TBL_PROJECTS = FuncUnique(sl,'project');

// Buscando todos os status existetes:
var TBL_STATUS = FuncUnique(sl,'status');

// Buscando todos os usuários existentes:  
var TBL_DEVS = FuncUniqueDev(sl);

module.exports = {dados, buscandoProjeto, programador, cardID, TBL_PROJECTS, TBL_STATUS, TBL_DEVS}
module.exports = { dados, buscandoProjeto, programador, cardID }


*/
