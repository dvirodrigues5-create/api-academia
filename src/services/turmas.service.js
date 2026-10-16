const turmasRepository = require("../repositories/turmas_repositories");
const modalidadesRepository = require("../repositories/modalidades_repositories");
const inscricoesRepository = require("../repositories/inscricoes_repositories");
const AppError = require("./AppError");

// Regra 6: dias por extenso e em minúsculas.
// Se o professor quiser outro formato (ex.: 'segunda', 'terça'), é só mudar aqui.
const DIAS_VALIDOS = [
  "domingo",
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sábado",
];

async function listar() {
  return turmasRepository.listar();
}

// Regra 10: id inexistente -> 404
async function buscarPorId(id) {
  const turma = await turmasRepository.buscarPorId(id);
  if (!turma) {
    throw new AppError("Turma não encontrada", 404);
  }
  return turma;
}

// Regras 5 e 6 -> 400. Só valida os campos que vieram (serve para criar e atualizar).
function validarCampos(dados) {
  if (dados.vagas !== undefined) {
    if (!Number.isInteger(dados.vagas) || dados.vagas <= 0) {
      throw new AppError(
        "O campo vagas precisa ser um inteiro maior que zero",
        400,
      );
    }
  }

  if (dados.dia_semana !== undefined) {
    if (!DIAS_VALIDOS.includes(dados.dia_semana)) {
      throw new AppError(
        `O campo dia_semana deve ser um destes: ${DIAS_VALIDOS.join(", ")}`,
        400,
      );
    }
  }
}

async function criar(dados) {
  // Na criação, vagas e dia_semana são obrigatórios
  if (dados.vagas === undefined) {
    throw new AppError("O campo vagas é obrigatório", 400);
  }
  if (dados.dia_semana === undefined) {
    throw new AppError("O campo dia_semana é obrigatório", 400);
  }
  validarCampos(dados);

  if (dados.modalidade_id !== undefined) {
    const modalidade = await modalidadesRepository.buscarPorId(
      dados.modalidade_id,
    );
    if (!modalidade) {
      throw new AppError("Modalidade não encontrada", 404);
    }
  }

  return turmasRepository.criar(dados);
}

async function atualizar(id, dados) {
  await buscarPorId(id); // 404 se não existir
  validarCampos(dados);
  return turmasRepository.atualizar(id, dados);
}

// Regra 8: turma com inscrições ativas não pode ser removida -> 409
async function remover(id) {
  await buscarPorId(id); // 404 se não existir

  const ativas = await inscricoesRepository.contarAtivasPorTurma(id);
  if (ativas > 0) {
    throw new AppError(
      `Não é possível remover a turma: existem ${ativas} inscrição(ões) ativa(s)`,
      409,
    );
  }

  return turmasRepository.deletar(id);
}

module.exports = { listar, buscarPorId, criar, atualizar, remover };