require("dotenv").config();

const mongoose = require("mongoose");

const connectionString = process.env.DB_URI;

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
