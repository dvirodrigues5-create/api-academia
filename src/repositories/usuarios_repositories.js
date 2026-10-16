const db = require("../infra/database");
// Lista todos os usuários
async function listar() {
    return await db("usuarios").select("*");
}

// Busca um usuário pelo ID
async function buscarPorId(id) {
    return await db("usuarios").where({ id }).first();
}

// Cadastra um novo usuário
async function criar(dados) {
    const [id] = await db("usuarios").insert(dados);
    return await buscarPorId(id);
}

// Atualiza um usuário
async function atualizar(id, dados) {
    await db("usuarios").where({ id }).update(dados);
    return await buscarPorId(id);
}

// Exclui um usuário
async function deletar(id) {
    return await db("usuarios").where({ id }).del();
}

module.exports = { listar, buscarPorId, criar, atualizar, deletar };