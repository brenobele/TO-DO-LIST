require('dotenv').config(); // Carrega as variáveis de ambiente
const express = require("express"); // Importa o express
const path = require("path"); // Importa o path
const routes = require("./routes/routes");  // Importa as rotas
const connectToDb = require("./database/db"); // Importa a função de conexão com o banco de dados

connectToDb();  // Conecta com o banco de dados
const app = express();  // Cria uma instância do express
const PORT = process.env.PORT;  // Define a porta do servidor

app.set("view engine", "ejs");  // Define o motor de visualização
app.use(express.static(path.join(__dirname, "public")));  // Define o diretório de arquivos estáticos
app.use(express.urlencoded());  // Habilita o uso de req.body
app.use(routes);  // Define as rotas


app.listen(PORT, () =>  // Inicia o servidor
  console.log(`Servidor rodando em http://localhost:${PORT}`) // Exibe a mensagem no console
);

// Fim do arquivo index.js