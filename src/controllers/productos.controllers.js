const Productos = require('../models/productos.mdb')

const getAll = async() => {
   return await Productos.find({})
}

module.exports = {getAll}