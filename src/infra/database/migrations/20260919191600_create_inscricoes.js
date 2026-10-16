// up: o que fazer para APLICAR a mudança
exports.up = function (knex) {
    //Criacao da Tabela
    return knex.schema.createTable("inscricoes", function (table) {

        //Criação das colunas
        table.increments("id")
        
        // Nulo significa "ainda não devolvido"
        table.timestamp("data_inscricoes").notNullable().defaultTo(knex.fn.now())

        // ATIVA (coluna booleana com valor padrão true)
        table.boolean("ativa").notNullable().defaultTo(true)

        // Chave estrangeira para usuarios.
        table.integer("usuario_id")
            .notNullable()
            .references("id")
            .inTable("usuarios")

        // Chave estrangeira para Turmas.
        table.integer("turma_id")
            .notNullable()
            .references("id")
            .inTable("turmas")
            
    })
}

// down: o que fazer para DESFAZER a mudança
exports.down = function (knex) {
    return knex.schema.dropTable("turmas")
}