const express = require("express")
const router = express.Router()

const inscricoesRouter = require("./inscricoes_routes")
//const modalidadesRouter = require("./modalidades_routes")
//const turmasRouter = require("./turmas_routes")
//const usuariosRouter = require("./usuarios_routes")

router.use("/inscricoes", inscricoesRouter)
//router.use("/modalidades", modalidadesRouter)
//router.use("/turmas", turmasRouter)
//router.use("/usuarios", usuariosRouter)

module.exports = router