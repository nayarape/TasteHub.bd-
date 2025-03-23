const mongoose = require("mongoose");


const RestauranteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  endereco: { type: String, required: true },
  tipoComida: { type: String, required: true },
  horarioFuncionamento: { type: String, required: true }
});
const Restaurante = mongoose.model("Restaurante", RestauranteSchema);


const AvaliacaoSchema = new mongoose.Schema({
  restaurante_id: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurante", required: true },
  usuario: { type: String, required: true },
  nota: { type: Number, required: true, min: 1, max: 5 },
  comentario: { type: String },
  data: { type: Date, default: Date.now }
});
const Avaliacao = mongoose.model("Avaliacao", AvaliacaoSchema);


const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true }
});
const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = { Restaurante, Avaliacao, Usuario };
