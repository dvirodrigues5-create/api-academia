// up: o que fazer para APLICAR a mudança
exports.up = function (knex) {
    //Criacao da Tabela
    return knex.schema.createTable("modalidades", function (table) {
        table.increments("id").primary()
        table.string("nome").notNullable().unique()
        table.string("descricao")
    })
}
// down: o que fazer para DESFAZER a mudança
exports.down = function (knex) {
    return knex.schema.dropTable("modalidades")
}