// src/controllers/livros.controller.js
const servico = require("../services/inscricoes.service")
module.exports = {

    async index(req, res, next) {
        try {
            // Query strings chegam sempre como texto
            const filtros = {
                titulo: req.query.titulo, categoriaId: req.query.categoria ? Number(req.query.categoria) : undefined, limite: req.query.limite ? Number(req.query.limite) : undefined,
                deslocamento: req.query.pagina
                    ? (Number(req.query.pagina) - 1) * Number(req.query.limite || 10)
                    : undefined
            }
            const turmas = await servico.index(filtros)
            res.json(turmas)
        } catch (erro) { next(erro) }
    },

    async show(req, res, next) {
        try {
            const turmas = await servico.show(Number(req.params.id))
            res.json(turmas)
        } catch (erro) { next(erro) }
    },

    async create(req, res, next) {
        try {
            const turmas = await servico.create(req.body)
            res.status(201).json(turmas)
        } catch (erro) { next(erro) }
    },

    async update(req, res, next) {
        try {
            const turmas = await servico.update(Number(req.params.id), req.body)
            res.json(turmas)
        } catch (erro) { next(erro) }
    },

    async delete(req, res, next) {
        try {
            await servico.delete(Number(req.params.id))

            // 204 = deu certo e não há corpo para devolver
            res.status(204).send()
        } catch (erro) { next(erro) }
    }
}