exports.seed = async function (knex) {

    // Limpa as tabelas antes de inserir
    await knex("turmas").del()

    await knex("turmas").insert([
        { id: 1, dia_semana: "SEG", horario: "08:00", professor: "Carlos Silva", vagas: 7, modalidade_id: 1 },
        { id: 2, dia_semana: "QUA", horario: "19:00", professor: "Carlos Silva", vagas: 7, modalidade_id: 1 },
        { id: 3, dia_semana: "TER", horario: "07:00", professor: "Ana Souza", vagas: 10, modalidade_id: 2 },
        { id: 4, dia_semana: "QUI", horario: "18:00", professor: "Ana Souza", vagas: 10, modalidade_id: 2 },
        { id: 5, dia_semana: "SEG", horario: "10:00", professor: "Marcos Lima", vagas: 5, modalidade_id: 3 },
        { id: 6, dia_semana: "SEX", horario: "17:00", professor: "Marcos Lima", vagas: 5, modalidade_id: 3 },
        { id: 7, dia_semana: "TER", horario: "09:00", professor: "Juliana Rocha", vagas: 5, modalidade_id: 4 },
        { id: 8, dia_semana: "QUI", horario: "20:00", professor: "Juliana Rocha", vagas: 5, modalidade_id: 4 }
    ])
}