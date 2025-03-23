const express = require("express");
const { Restaurante, Avaliacao, Usuario } = require("../models");

const router = express.Router();

// RESTAURANTES


router.post("/restaurantes", async (req, res) => {
  try {
    const restaurante = new Restaurante(req.body);
    await restaurante.save();
    res.status(201).json(restaurante);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.get("/restaurantes", async (req, res) => {
  const restaurantes = await Restaurante.find();
  res.json(restaurantes);
});


router.get("/restaurantes/:id", async (req, res) => {
  const restaurante = await Restaurante.findById(req.params.id);
  if (!restaurante) return res.status(404).json({ error: "Restaurante não encontrado" });
  res.json(restaurante);
});


router.put("/restaurantes/:id", async (req, res) => {
  const restaurante = await Restaurante.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(restaurante);
});


router.delete("/restaurantes/:id", async (req, res) => {
  await Restaurante.findByIdAndDelete(req.params.id);
  res.json({ message: "Restaurante removido" });
});

//AVALIAÇÕES


router.post("/avaliacoes", async (req, res) => {
  try {
    const avaliacao = new Avaliacao(req.body);
    await avaliacao.save();
    res.status(201).json(avaliacao);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.get("/avaliacoes/:restaurante_id", async (req, res) => {
  const avaliacoes = await Avaliacao.find({ restaurante_id: req.params.restaurante_id });
  res.json(avaliacoes);
});


router.put("/avaliacoes/:id", async (req, res) => {
  const avaliacao = await Avaliacao.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(avaliacao);
});


router.delete("/avaliacoes/:id", async (req, res) => {
  await Avaliacao.findByIdAndDelete(req.params.id);
  res.json({ message: "Avaliação removida" });
});

// USUÁRIOS 


router.post("/usuarios", async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


