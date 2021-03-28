A nossa solução unifica e trata os dados utilizando o node.js, e importa esses dados no SGDB Postegresql para que posteriomente possamos integrar esse banco ao nosso dashboard.


PREPARANDO A MÁQUINA:
Para conseguir rodar a solução é necessário possuir o NODE.JS e o POSTEGRESQL intalados em sua máquina.

Baixe os arquivos contidos nesse diretório

Instale os módulos necessários:
através do prompt de comando vá até a pasta em que os arquivos baixados estão salvos e digite:
npm install express
npm install pg 


Criar um usuário e banco de dados no Postegresql que será aplicado no projeto:
através do shell do postgresql, digite os seguinte comando.

Para criar um usuário "me" com a senha "password"
postgres=# CREATE ROLE me WITH LOGIN PASSWORD 'password';

Alterar as permições desse usuário para conseguir criar um database.
postgres=# ALTER ROLE me CREATEDB;

Então conecte-se ao usuário criado e crie o database através do comando:
CREATE DATABASE api;

Por fim, para se conectar a esse database criado, utilize o comando:
\c


CRIANDO AS TABELAS NO BANCO DE DADOS:
Vá até a pasta em que salvou os arquivos deste diretório pelo prompt de comandos e rode o arquivo: 01_app.js, através do seguinte comando no prompt:
node 01_app.js


POPULANDO AS TABELAS NO POSTEGRESQL:
Nesta mesma pasta do prompt de comandos rode o comando:
node 02_app.js


EXPORTANDO ARQUIVOS *.csv do POSTEGRESQL:

Inicialemnet deve-se criar os arquivos tbl_dev.csv tbl_projeto.csv, tbl_sistema.csv, tbl_git.csv, tbl_status.csv, tbl_task.csv, tbl_task_detalhes.csv no caminho "C:/temp/"

Então executar os seguinte comandos no psql:

\COPY ( SELECT * FROM tbl_dev)  to 'C:/temp/tbl_dev.csv'  WITH DELIMITER AS ';' CSV HEADER

\COPY ( SELECT * FROM tbl_projeto)  to 'C:/temp/tbl_projeto.csv'  WITH DELIMITER AS ';' CSV HEADER

\COPY ( SELECT * FROM tbl_sistema)  to 'C:/temp/tbl_sistema.csv'  WITH DELIMITER AS ';' CSV HEADER

\COPY ( SELECT * FROM tbl_git)  to 'C:/temp/tbl_git.csv'  WITH DELIMITER AS ';' CSV HEADER

\COPY ( SELECT * FROM tbl_status)  to 'C:/temp/tbl_status.csv'  WITH DELIMITER AS ';' CSV HEADER

\COPY ( SELECT * FROM tbl_task)  to 'C:/temp/tbl_task.csv'  WITH DELIMITER AS ';' CSV HEADER

\COPY ( SELECT * FROM tbl_task_detalhes)  to 'C:/temp/tbl_task_detalhes.csv'  WITH DELIMITER AS ';' CSV HEADER


Os arquivos podem ser salvos em outro caminho desde que o camando \copy seja alterado para esse mesmo caminho também.

Esses arquivos salvos estão dentro da pasta "CSV export".



Na nossa modelagem de dados teórica foram dimensionadas e relacionadas também tabelas de recarga de dados e de usuários, que ainda não foram implementadas, pois em um primeiro momento, com apenas dois arquivos para a recarga dos dados não seria interessante, mas com a evolução do projeto e alimentação de mais dados a equipe irá implementar também essas tabelas no banco de dados, bem como otimizar o código utilizado nas tabelas já existentes. 


