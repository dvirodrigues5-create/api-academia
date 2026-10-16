const express = require("express")
const router = express.Router()
const modalidadesController = require("../controllers/modalidadesController")

// Lista todos os modalidades
router.get("/", modalidadesController.listar)

// Busca um modalidades pelo ID
router.get("/:id", modalidadesController.buscarPorId)

// Cria um novo modalidades
router.post("/", modalidadesController.criar)

// Atualiza um modalidades pelo ID
router.put("/:id", modalidadesController.atualizar)

// Deleta um modalidades pelo ID
router.delete("/:id", modalidadesController.deletar)

module.exports = router