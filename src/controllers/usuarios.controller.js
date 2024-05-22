
const Usuario = require('../models/usuarios.model');


const obterTodosUsuarios = async function() {
    return await Usuario.find({})
}

module.exports = {obterTodosUsuarios}