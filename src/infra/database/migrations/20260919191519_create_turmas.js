// up: o que fazer para APLICAR a mudança
exports.up = function (knex) {

  //Criacao da Tabela
  return knex.schema.createTable("turmas", function (table) {
    
    //Criação das colunas
    table.increments("id").primary()
    table.string("dia_semana").notNullable()
    table.string("horario").notNullable().unique()
    table.integer("vagas").notNullable()
    table.string("professor").notNullable()
    // table.check("vagas > 0")

    // Chave estrangeira para modalidades.
    table.integer("modalidade_id")
      .notNullable()
      .references("id")
      .inTable("modalidades")

  })
}

// down: o que fazer para DESFAZER a mudança
exports.down = function (knex) {
  return knex.schema.dropTable("turmas")
}