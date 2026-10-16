const path = require("path")

module.exports = {

  development: {
    //Banco que etar sento ultilizado:
    client: 'sqlite3',
    //onde fica o arquivo do banco:
    connection: { filename: path.resolve(__dirname, "src", "infra", "database", "biblbioteca.sqlite") },

    // Onde ficam os arquivos de migration
    migrations: { directory: path.resolve(__dirname, "src", "infra", "database", "migrations") },

    // Onde ficam os arquivos de seed
    seeds: { directory: path.resolve(__dirname, "src", "infra", "database", "seeds") },

    // Obrigatório no SQLite
    useNullAsDefault: true
  }
}