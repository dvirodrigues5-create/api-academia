exports.seed = async function (knex) {

    // Limpa as tabelas antes de inserir
    await knex("modalidades").del()

    await knex("modalidades").insert([
        { id: 1, nome: "Musculação", descricao: "Foco em ganho de força, hipertrofia e definição muscular."},
        { id: 2, nome: "Ginastica", descricao: "Aulas com acessórios como Jump, Step e Ginástica localizada."},
        { id: 3, nome: "Artes marciais", descricao: "Modalidades como: Muay Thai, Box, Jiu-Jitsu e Judô, que auxiliam no gasto calórico e disciplina."},
        { id: 4, nome: "Natação", descricao: "Atividades aquáticas de baixo impacto,indicados para condicionamento e reabilitação." },
    ])
}