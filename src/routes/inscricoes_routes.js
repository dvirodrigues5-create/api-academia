const express = require("express")
const router = express.Router()
const inscricoesController = require("../controllers/inscricoesController")

// Lista todos os inscricoes
router.get("/", modalidadesController.listar)

// Busca um inscricoes pelo ID
router.get("/:id", modalidadesController.buscarPorId)

// Cria um novo inscricoes
router.post("/", inscricoesController.criar)

// Atualiza um inscricoes pelo ID
router.put("/:id", inscricoesController.atualizar)

// Deleta um inscricoes pelo ID
router.delete("/:id", inscricoesController.deletar)

module.exports = router