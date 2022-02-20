const express = require("express");
const routes = express.Router();
const EnderecoController = require("./app/controller/EnderecoController");
const JogadorController = require("./app/controller/JogadorController");
const PatenteController = require("./app/controller/PatenteController");
const ArtefatoController = require("./app/controller/ArtefatoController");
const CompraController = require("./app/controller/ArtefatoController");
const ObjetivoController = require("./app/controller/ObjetivoController");
const RoundController = require("./app/controller/RoundController");
const PartidaController = require("./app/controller/PartidaController");
const LocalController =  require("./app/controller/LocalController");
const ResultadoController = require("./app/controller/ResultadoController");
const ArmaController = require("./app/controller/ArmaController");
const MunicaoController = require("./app/controller/MunicaoController");

routes.get("/", function (req, res) {
    return res.send("Servidor no ar ...");
});
routes.get("/endereco", EnderecoController.list);
routes.post("/endereco", EnderecoController.store);


routes.get("/jogador", JogadorController.list);
routes.post("/jogador", JogadorController.store);
routes.put("/jogador", JogadorController.update);
routes.delete("/jogador", JogadorController.delete);

routes.get("/patente", PatenteController.list);
routes.post("/patente", PatenteController.store);

routes.get("/artefato", ArtefatoController.list);
routes.post("/artefato", ArtefatoController.store);

routes.get("/compra", CompraController.list);
routes.post("/compra", CompraController.store);

routes.get("/objetivo", ObjetivoController.list);
routes.post("/objetivo", ObjetivoController.store);
routes.put("/objetivo", ObjetivoController.update);
routes.delete("/objetivo", ObjetivoController.delete)

routes.get("/round", RoundController.list);
routes.post("/round", RoundController.store);
routes.delete("/round", RoundController.delete);
routes.put("/round", RoundController.update);

routes.get("/partida", PartidaController.list);
routes.post("/partida", PartidaController.store);
routes.put("/partida", PartidaController.update);
routes.delete("/partida", PartidaController.delete);

routes.get("/resultado", ResultadoController.list);
routes.post("/resultado", ResultadoController.store);
routes.put("/resultado", ResultadoController.update);
routes.delete("/resultado", ResultadoController.delete)


routes.get("/local", LocalController.list);
routes.post("/local", LocalController.store);

routes.get("/arma", ArmaController.list);
routes.post("/arma", ArmaController.store);
routes.put("/arma", ArmaController.update);
routes.delete("/arma", ArmaController.delete);

routes.get("/municao", MunicaoController.list);
routes.post("/municao", MunicaoController.store);
routes.put("/municao", MunicaoController.update);
routes.delete("/municao", MunicaoController.delete);

module.exports = routes;