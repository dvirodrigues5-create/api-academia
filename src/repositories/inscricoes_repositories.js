const db = require("../infra/database");

// Lista inscrições (aceita paginação e filtros por usuário e turma)
async function listar({ limite, deslocamento, usuario_id, turma_id } = {}) {
    const consulta = db("inscricoes").select("*").orderBy("id");
    if (usuario_id) consulta.where({ usuario_id });
    if (turma_id) consulta.where({ turma_id });
    if (limite) consulta.limit(limite);
    if (deslocamento) consulta.offset(deslocamento);
    return await consulta;
}

// Busca uma inscrição pelo ID
async function buscarPorId(id) {
    return await db("inscricoes").where({ id }).first();
}

// Busca a inscrição de um usuário em uma turma (para evitar inscrição duplicada)
async function buscarPorUsuarioETurma(usuario_id, turma_id) {
    return await db("inscricoes").where({ usuario_id, turma_id }).first();
}

// Conta quantas inscrições ativas uma turma tem (para conferir as vagas)
async function contarAtivasPorTurma(turma_id) {
    const resultado = await db("inscricoes").where({ turma_id, ativa: true }).count({ total: "*" }).first();
    return Number(resultado.total);
}

// Cadastra uma nova inscrição
async function criar(dados) {
    const [id] = await db("inscricoes").insert(dados);
    return await buscarPorId(id);
}

// Atualiza uma inscrição
async function atualizar(id, dados) {
    await db("inscricoes").where({ id }).update(dados);
    return await buscarPorId(id);
}

// Exclui uma inscrição 
async function deletar(id) {
    return await db("inscricoes").where({ id }).del();
}

module.exports = { listar, buscarPorId, buscarPorUsuarioETurma, contarAtivasPorTurma, criar, atualizar, deletar,
};