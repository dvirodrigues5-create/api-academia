const express = require("express")
const router = express.Router()
const turmasController = require("../controllers/turmasController")

// Lista todos os turmas
router.get("/", turmasController.listar)

// Busca um turmas pelo ID
router.get("/:id", turmasController.buscarPorId)

// Cria um novo turmas
router.post("/", turmasController.criar)

// Atualiza um turmas pelo ID
router.put("/:id", turmasController.atualizar)

// Deleta um turmas pelo ID
router.delete("/:id", turmasController.deletar)

module.exports = router