const inscricoesRepository = require("../repositories/inscricoes_repositories");
const usuariosRepository = require("../repositories/usuarios_repositories");
const turmasRepository = require("../repositories/turmas_repositories");
const AppError = require("./AppError");

async function listar() {
  return inscricoesRepository.listar();
}

// Regra 10: id inexistente -> 404
async function buscarPorId(id) {
  const inscricao = await inscricoesRepository.buscarPorId(id);
  if (!inscricao) {
    throw new AppError("Inscrição não encontrada", 404);
  }
  return inscricao;
}

async function criar(dados) {
  const { usuario_id, turma_id } = dados;

  // Regra 10: usuário e turma precisam existir -> 404
  const usuario = await usuariosRepository.buscarPorId(usuario_id);
  if (!usuario) {
    throw new AppError("Usuário não encontrado", 404);
  }

  const turma = await turmasRepository.buscarPorId(turma_id);
  if (!turma) {
    throw new AppError("Turma não encontrada", 404);
  }

  // Regra 2: mesmo aluno não pode ter duas inscrições ativas na mesma turma -> 409
  const jaInscrito = await inscricoesRepository.buscarAtivaPorUsuarioETurma(
    usuario_id,
    turma_id,
  );
  if (jaInscrito) {
    throw new AppError(
      "O aluno já possui uma inscrição ativa nessa turma",
      409,
    );
  }

  // Regra 1: turma não aceita mais inscrições ativas do que o número de vagas -> 409
  const ativas = await inscricoesRepository.contarAtivasPorTurma(turma_id);
  if (ativas >= turma.vagas) {
    throw new AppError(
      "A turma está lotada: não há mais vagas disponíveis",
      409,
    );
  }

  return inscricoesRepository.criar({ ...dados, ativa: true });
}

// Regras 3 e 4: cancelar = marcar ativa = false (nunca apagar) -> 409 se já cancelada
async function cancelar(id) {
  const inscricao = await buscarPorId(id); // 404 se não existir

  if (!inscricao.ativa) {
    throw new AppError("Essa inscrição já foi cancelada", 409);
  }

  return inscricoesRepository.atualizar(id, { ativa: false });
}

module.exports = { listar, buscarPorId, criar, cancelar };