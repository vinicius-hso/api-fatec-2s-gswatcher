# 📄 Instruções para rodar o código

## 🖥️ Preparando a máquina

Para conseguir rodar a solução é necessário possuir o __Node.js__ e o __PostgreSQL__ intalados em sua máquina.

Link para download:

> * [__Node.js__](https://nodejs.org/en/download/)
> * [__PostgreSQL__](https://www.postgresql.org/download/)

Baixe os arquivos contidos nesse diretório

### Instale os módulos necessários através do prompt de comando 

Vá até a pasta em que os arquivos baixados estão salvos e digite:

`npm install express`
`npm install pg` 


### Criar um usuário e banco de dados no Postegresql que será aplicado no projeto

Através do shell do postgresql, digite os seguinte comando:

> * Para criar um usuário "me" com a senha "password":
> 
> `postgres=# CREATE ROLE me WITH LOGIN PASSWORD 'password';`

> * Alterar as permições desse usuário para conseguir criar um database:
> 
> `postgres=# ALTER ROLE me CREATEDB;`

> * Então conecte-se ao usuário criado e crie o database através do comando:
> 
> `CREATE DATABASE api;`

> * Por fim, para se conectar a esse database criado, utilize o comando:
>
> `\c`


### Criando as tabelas no banco de dados

Vá até a pasta em que salvou os arquivos deste diretório pelo prompt de comandos e rode o arquivo 01_app.js, através do seguinte comando no prompt:

> `node 01_app.js`

### Populando as tabelas no PostgreSQL

Nesta mesma pasta do prompt de comandos rode o comando:

> `node 02_app.js`


### Exportando arquivos *.csv do PostgreSQL:

Inicialmente deve-se criar os arquivos __tbl_dev.csv__ __tbl_projeto.csv__, __tbl_sistema.csv__, __tbl_git.csv__, __tbl_status.csv__, __tbl_task.csv__, __tbl_task_detalhes.csv__ no caminho:

> `C:/temp/`

Então executar os seguinte comandos no __psql__:

> `\COPY ( SELECT * FROM tbl_dev)  to 'C:/temp/tbl_dev.csv'  WITH DELIMITER AS ';' CSV HEADER`
>
> `\COPY ( SELECT * FROM tbl_projeto)  to 'C:/temp/tbl_projeto.csv'  WITH DELIMITER AS ';' CSV HEADER`
>
> `\COPY ( SELECT * FROM tbl_sistema)  to 'C:/temp/tbl_sistema.csv'  WITH DELIMITER AS ';' CSV HEADER`
>
> `\COPY ( SELECT * FROM tbl_git)  to 'C:/temp/tbl_git.csv'  WITH DELIMITER AS ';' CSV HEADER`
>
> `\COPY ( SELECT * FROM tbl_status)  to 'C:/temp/tbl_status.csv'  WITH DELIMITER AS ';' CSV HEADER`
>
> `\COPY ( SELECT * FROM tbl_task)  to 'C:/temp/tbl_task.csv'  WITH DELIMITER AS ';' CSV HEADER`
>
> `\COPY ( SELECT * FROM tbl_task_detalhes)  to 'C:/temp/tbl_task_detalhes.csv'  WITH DELIMITER AS ';' CSV HEADER`


Os arquivos podem ser salvos em outro caminho desde que o camando \copy seja alterado para esse mesmo caminho também.

Esses arquivos salvos estão dentro da pasta "CSV export".

Na nossa modelagem de dados teórica foram dimensionadas e relacionadas também tabelas de recarga de dados e de usuários, que ainda não foram implementadas, pois em um primeiro momento, com apenas dois arquivos para a recarga dos dados não seria interessante, mas com a evolução do projeto e alimentação de mais dados a equipe irá implementar também essas tabelas no banco de dados, bem como otimizar o código utilizado nas tabelas já existentes. 
