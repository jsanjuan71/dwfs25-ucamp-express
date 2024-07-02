
const Usuario = require('../models/usuarios.model');
const jwt = require('jsonwebtoken')


const obterTodosUsuarios = async function() {
    return await Usuario.find({})
}

const add = async(nuevoUsuario) => {
    return await Usuario.create(nuevoUsuario)
}
 
const getByEmail = async(correo) => {
    return await Usuario.findOne({correo: correo})
}

const getById = async(id) => {  
    return await Usuario.findById(id).select('-contrasena')
}


const generarToken = async(payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET)
}

module.exports = {
    obterTodosUsuarios, 
    add, 
    getByEmail, 
    generarToken,
    getById
}