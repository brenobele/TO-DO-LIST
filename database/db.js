require("dotenv").config();

const mongoose = require("mongoose");

const dbName = process.env.DB_NAME;
const dbPassword = process.env.DB_PASSWORD;

const connectionString = `mongodb+srv://${dbName}:${dbPassword}@todolist.0thp4zc.mongodb.net/?retryWrites=true&w=majority&appName=todolist`;

const connectToDb = () => {
  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Conectado ao banco de dados");
    })
    .catch((err) => {
      console.error("Erro ao conectar ao banco de dados", err);
    });
};

module.exports = connectToDb;
