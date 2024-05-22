const Usuarios = require('../models/usuarios.mdb')

const getAll = async() => {
   return await Usuarios.find({})
}

const add = async(nuevoUsuario) => {
   return await Usuarios.create(nuevoUsuario)
}

const getByEmail = async(correo) => {
      return await Usuarios.findOne({correo: correo})
}



module.exports = {getAll, add, getByEmail}