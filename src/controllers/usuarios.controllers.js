const Usuarios = require('../models/usuarios.mdb')
const jwt = require('jsonwebtoken')

const getAll = async() => {
   return await Usuarios.find({})
}

const add = async(nuevoUsuario) => {
   return await Usuarios.create(nuevoUsuario)
}

const getByEmail = async(correo) => {
      return await Usuarios.findOne({correo: correo})
}

const generarToken = async(payload) => {
      return jwt.sign(payload, process.env.JWT_SECRET)
}



module.exports = {getAll, add, getByEmail, generarToken}