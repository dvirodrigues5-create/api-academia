const db = require("../infra/database");

// Lista modalidades (aceita paginação: limite e deslocamento)
async function listar({ limite, deslocamento } = {}) {
    const consulta = db("modalidades").select("*").orderBy("nome");
    if (limite) consulta.limit(limite);
    if (deslocamento) consulta.offset(deslocamento);
    return await consulta;
}

// Busca uma modalidade pelo ID
async function buscarPorId(id) {
    return await db("modalidades").where({ id }).first();
}

// Busca uma modalidade pelo nome (o nome é único)
async function buscarPorNome(nome) {
    return await db("modalidades").where({ nome }).first();
}

// Cadastra uma nova modalidade
async function criar(dados) {
    const [id] = await db("modalidades").insert(dados);
    return await buscarPorId(id);
}

// Atualiza uma modalidade
async function atualizar(id, dados) {
    await db("modalidades").where({ id }).update(dados);
    return await buscarPorId(id);
}

// Exclui uma modalidade (retorna quantas linhas foram apagadas)
async function deletar(id) {
    return await db("modalidades").where({ id }).del();
}

module.exports = {
    listar,
    buscarPorId,
    buscarPorNome,
    criar,
    atualizar,
    deletar,
};