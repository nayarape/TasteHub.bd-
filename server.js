require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Restaurante, Avaliacao, Usuario } = require("./models.js");
const routes = require("./routes");

const app = express();


app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB conectado!"))
  .catch(err => console.log("Erro ao conectar ao MongoDB:", err));


app.get("/", (req, res) => res.send("API de Avaliação de Restaurantes 🍽️"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));



app.use("/api", routes);



