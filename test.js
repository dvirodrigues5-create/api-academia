const usuarios = require("./src/repositories/usuarios_repositories");

usuarios.listar()
    .then(console.log)
    .catch(console.error)
    .finally(() => process.exit());