const usuariosRepository = require("../repositories/usuarios_repositories");
const AppError = require("./AppError");

async function listar() {
  return usuariosRepository.listar();
}

// Regra 10: id inexistente -> 404
async function buscarPorId(id) {
  const usuario = await usuariosRepository.buscarPorId(id);
  if (!usuario) {
    throw new AppError("Usuário não encontrado", 404);
  }
  return usuario;
}

// Regra 9: e-mail e matrícula não podem se repetir -> 409
// idAtual serve para a atualização não acusar duplicidade com o próprio usuário.
async function validarDuplicidade(dados, idAtual) {
  if (dados.email !== undefined) {
    const existente = await usuariosRepository.buscarPorEmail(dados.email);
    if (existente && Number(existente.id) !== Number(idAtual)) {
      throw new AppError("Já existe um usuário com esse e-mail", 409);
    }
  }

  if (dados.matricula !== undefined) {
    const existente = await usuariosRepository.buscarPorMatricula(
      dados.matricula,
    );
    if (existente && Number(existente.id) !== Number(idAtual)) {
      throw new AppError("Já existe um usuário com essa matrícula", 409);
    }
  }
}

async function criar(dados) {
  await validarDuplicidade(dados);
  return usuariosRepository.criar(dados);
}

async function atualizar(id, dados) {
  await buscarPorId(id); // 404 se não existir
  await validarDuplicidade(dados, id);
  return usuariosRepository.atualizar(id, dados);
}

async function remover(id) {
  await buscarPorId(id); // 404 se não existir
  return usuariosRepository.deletar(id);
}

module.exports = { listar, buscarPorId, criar, atualizar, remover };