const express = require("express")
const router = express.Router()
const usuarioController = require("../controllers/usuariosController")

// Lista todos os usuários
router.get("/", usuarioController.listar)

// Busca um usuário pelo ID
router.get("/:id", usuarioController.buscarPorId)

// Cria um novo usuário
router.post("/", usuarioController.criar)

// Atualiza um usuário pelo ID
router.put("/:id", usuarioController.atualizar)

// Deleta um usuário pelo ID
router.delete("/:id", usuarioController.deletar)

module.exports = router