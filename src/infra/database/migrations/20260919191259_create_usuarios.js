// up: o que fazer para APLICAR a mudança
exports.up = function (knex) {
    //Criacao da Tabela
    return knex.schema.createTable("usuarios", function (table) {
        //Criação das colunas
        table.increments("id").primary()
        table.string("nome").notNullable()
        table.string("email").notNullable().unique()
        table.string("matricula").notNullable().unique()
        table.timestamp("criado_em").defaultTo(knex.fn.now())
    })
}
// down: o que fazer para DESFAZER a mudança
exports.down = function (knex) {
    return knex.schema.dropTable("usuarios")
}