## 💬 SOLUÇÃO
A nossa solução unifica e trata os dados utilizando o node.js, e importa esses dados no SGDB Postegresql para que posteriomente possamos integrar esse banco ao nosso dashboard.

Na nossa modelagem de dados teórica foram dimensionadas e relacionadas também tabelas de recarga de dados e de usuários, que ainda não foram implementadas, pois em um primeiro momento, com apenas dois arquivos para a recarga dos dados não seria interessante, mas com a evolução do projeto e alimentação de mais dados a equipe irá implementar também essas tabelas no banco de dados, bem como otimizar o código utilizado nas tabelas já existentes. 

Modelagem de Dados - Modelo Entidade Relacionamento:
![](https://github.com/vinicius-hso/api-fatec-2s-gswatcher/blob/main/Modelagem%20de%20Dados/modelo_logico_relacional_gswatcher.jpeg)

Modelagem de dados implementada com Node.js e Postegresql:
![](https://github.com/vinicius-hso/api-fatec-2s-gswatcher/blob/main/Modelagem%20de%20Dados/modelagem_dados.gif)


#####  - 📂 Arquivos com dados unificados e exportados para o formato .csv
Acesse os documentos clicando nos links abaixo:

* [_TBL_DEV_](https://github.com/vinicius-hso/api-fatec-2s-gswatcher/blob/main/Modelagem%20de%20Dados/CODIGO/CSV_export/tbl_dev.csv)
* [_TBL PROJETO_](https://github.com/vinicius-hso/api-fatec-2s-gswatcher/blob/main/Modelagem%20de%20Dados/CODIGO/CSV_export/tbl_projeto.csv)
* [_TBL GIT_](https://github.com/vinicius-hso/api-fatec-2s-gswatcher/blob/main/Modelagem%20de%20Dados/CODIGO/CSV_export/tbl_git.csv)
* [_TBL SISTEMA_](https://github.com/vinicius-hso/api-fatec-2s-gswatcher/blob/main/Modelagem%20de%20Dados/CODIGO/CSV_export/tbl_sistema.csv)
* [_TBL STATUS_](https://github.com/vinicius-hso/api-fatec-2s-gswatcher/blob/main/Modelagem%20de%20Dados/CODIGO/CSV_export/tbl_status.csv)
* [_TBL TASK_](https://github.com/vinicius-hso/api-fatec-2s-gswatcher/blob/main/Modelagem%20de%20Dados/CODIGO/CSV_export/tbl_task.csv)
* [_TBL TASK DETALHES_](https://github.com/vinicius-hso/api-fatec-2s-gswatcher/blob/main/Modelagem%20de%20Dados/CODIGO/CSV_export/tbl_task_detalhes.csv)

