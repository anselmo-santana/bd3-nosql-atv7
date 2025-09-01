/* CRIAÇÃO DA CONSTANTE QUE REPESENTA O NOME DO BANCO DE DADOS: */
const database = "BD3-NoSQL-Produtos";

/* CRIAÇÃO DA CONSTANTE QUE REPESENTA O NOME DA COLEÇÃO DE ARQUIVOS: */
const collection = "bd3-nosql-atv7";

/* DEFINE O BANCO DE DADOS QUE SERÁ UTILIZADO, CASO NÃO EXISTA SERÁ CRIADO */
use(database);

/* CRIA UMA COLEÇÃO DE DADOS: */
db.createCollection(collection);
