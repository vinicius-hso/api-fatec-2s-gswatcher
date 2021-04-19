# app integrado front-end e back-end.

![](https://github.com/vinicius-hso/api-fatec-2s-gswatcher/blob/Sprint-2/Images/arquitetura.png)

# 📄 Instruções para rodar o código

## 🖥️ Preparando a máquina

Para conseguir rodar a solução é necessário possuir o __Node.js__ e o __PostgreSQL__ intalados em sua máquina.

Link para download:

> * [__Node.js__](https://nodejs.org/en/download/)
> * [__PostgreSQL__](https://www.postgresql.org/download/)

Baixe os arquivos contidos nesse diretório

### Instale os módulos necessários através do prompt de comando 

Vá até a pasta em que os arquivos baixados estão salvos (tanto na pasta do front "gswatcher", quanto na do backend "Nodejs") e digite:

`npm install`


### Criar um usuário e banco de dados no Postegresql que será aplicado no projeto

Através do shell do postgresql, digite os seguinte comando:

> * Para criar um usuário "me" com a senha "password":
> 
> `postgres=# CREATE ROLE me WITH LOGIN PASSWORD 'password';`

> * Alterar as permissões desse usuário para conseguir criar um database:
> 
> `postgres=# ALTER ROLE me CREATEDB;`

> * Então conecte-se ao usuário criado e crie o database através do comando:
> 
> `CREATE DATABASE api;`

> * Por fim, para se conectar a esse database criado, utilize o comando:
>
> `\c`


### Não esqueça de criar o arquivo .env na pasta "Nodejs"!

DATABASE_URL=postgres://me:password@localhost:5432/api

### Rode o servidor:

na pasta "Nodejs" rode pelo prompt: 
> `node app.js`


###  Rode o Cliente:

na pasta "gswatcher" rode pelo prompt: 
> `npm run serve`



