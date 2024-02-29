const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect("mongodb://localhost:27017", { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB CONECTADO!"))
    .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));
};

module.exports = connectToDb;
