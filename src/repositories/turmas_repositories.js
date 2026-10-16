const db = require("../infra/database");

// Lista turmas já com o nome da modalidade (aceita paginação e filtro por modalidade)
async function listar({ limite, deslocamento, modalidade_id } = {}) {
    const consulta = db("turmas")
        .join("modalidades", "modalidades.id", "turmas.modalidade_id")
        .select("turmas.*", "modalidades.nome as modalidade_nome")
        .orderBy(["turmas.dia_semana", "turmas.horario"]);

    if (modalidade_id) consulta.where("turmas.modalidade_id", modalidade_id);
    if (limite) consulta.limit(limite);
    if (deslocamento) consulta.offset(deslocamento);
    return await consulta;
}

// Busca uma turma pelo ID
async function buscarPorId(id) {
    return await db("turmas")
        .join("modalidades", "modalidades.id", "turmas.modalidade_id")
        .select("turmas.*", "modalidades.nome as modalidade_nome")
        .where("turmas.id", id)
        .first();
}

// Cadastra uma nova turma
async function criar(dados) {
    const [id] = await db("turmas").insert(dados);
    return await buscarPorId(id);
}

// Atualiza uma turma
async function atualizar(id, dados) {
    await db("turmas").where({ id }).update(dados);
    return await buscarPorId(id);
}

// Exclui uma turma (retorna quantas linhas foram apagadas)
async function deletar(id) {
    return await db("turmas").where({ id }).del();
}

module.exports = { listar, buscarPorId, criar, atualizar, deletar };