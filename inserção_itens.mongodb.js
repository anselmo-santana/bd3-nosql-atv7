/* CRIAÇÃO DA CONSTANTE QUE REPESENTA O NOME DO BANCO DE DADOS: */
const database = "BD3-NoSQL-Produtos";

/* CRIAÇÃO DA CONSTANTE QUE REPESENTA O NOME DA COLEÇÃO DE ARQUIVOS: */
const collection = "bd3-nosql-atv7";

/* DEFINE O BANCO DE DADOS QUE SERÁ UTILIZADO, CASO NÃO EXISTA SERÁ CRIADO */
use(database);

/* CRIA UMA COLEÇÃO DE DADOS: */
db.createCollection(collection);

db["bd3-nosql-atv7"].insertMany([
  {
    cod_produto: "1",
    nome_produto: "Mouse Gamer RGB",
    desc_produto: "Mouse com iluminação RGB, 7200 DPI e 6 botões programáveis",
    valor: 99.9,
  },
  {
    cod_produto: "2",
    nome_produto: "Teclado Mecânico",
    desc_produto: "Teclado mecânico com switches blue e iluminação LED",
    valor: 199.0,
  },
  {
    cod_produto: "3",
    nome_produto: "Monitor 19'' Full HD",
    desc_produto: "Monitor LED 19 polegadas com resolução Full HD 75Hz",
    valor: 699.99,
  },
  {
    cod_produto: "4",
    nome_produto: "Headset Gamer",
    desc_produto:
      "Headset com som surround 7.1, microfone removível e design ergonômico",
    valor: 99.9,
  },
  {
    cod_produto: "5",
    nome_produto: "Cadeira Gamer",
    desc_produto:
      "Cadeira com ajuste de altura, apoio para braços e encosto reclinável",
    valor: 920.0,
  },
  {
    cod_produto: "6",
    nome_produto: "Webcam HD",
    desc_produto: "Webcam 1080p com microfone embutido e foco automático",
    valor: 299.0,
  },
  {
    cod_produto: "7",
    nome_produto: "Memória Ram",
    desc_produto:
      "Memória RAM Notebook Ddr4 3200mhz 16gb Cl22 color verde Crucial",
    valor: 799.0,
  },
  {
    cod_produto: "8",
    nome_produto: "Smartphone 128GB Redmi Note 12",
    desc_produto: "Smartphone Android com tela AMOLED 6.5'' e câmera tripla",
    valor: 999.0,
  },
  {
    cod_produto: "9",
    nome_produto: "Caixa de Som Bluetooth",
    desc_produto:
      "Caixa portátil com conexão Bluetooth, bateria 12h e à prova d'água",
    valor: 230.0,
  },
  {
    cod_produto: "10",
    nome_produto: "HD Externo 1TB",
    desc_produto: "HD externo portátil USB 3.0 com 1TB de capacidade",
    valor: 199.9,
  },
]);
