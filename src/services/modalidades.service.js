const modalidadesRepository = require("../repositories/modalidades_repositories");
const turmasRepository = require("../repositories/turmas_repositories");
const AppError = require("./AppError");

async function listar() {
  return modalidadesRepository.listar();
}

// Regra 10: id inexistente -> 404
async function buscarPorId(id) {
  const modalidade = await modalidadesRepository.buscarPorId(id);
  if (!modalidade) {
    throw new AppError("Modalidade não encontrada", 404);
  }
  return modalidade;
}

async function criar(dados) {
  return modalidadesRepository.criar(dados);
}

async function atualizar(id, dados) {
  await buscarPorId(id); // 404 se não existir
  return modalidadesRepository.atualizar(id, dados);
}

// Regra 7: modalidade com turmas vinculadas não pode ser removida -> 409 com motivo
async function remover(id) {
  await buscarPorId(id); // 404 se não existir

  const turmas = await turmasRepository.listarPorModalidade(id);
  if (turmas.length > 0) {
    throw new AppError(
      `Não é possível remover a modalidade: existem ${turmas.length} turma(s) vinculada(s) a ela`,
      409,
    );
  }

  return modalidadesRepository.deletar(id);
}

module.exports = { listar, buscarPorId, criar, atualizar, remover };