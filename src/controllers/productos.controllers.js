const Productos = require('../models/productos')

const getAll = async() => {
   return await Productos.find({})
}

const create = async(producto) => {
   await Productos.create(producto)
}

module.exports = {getAll, create}