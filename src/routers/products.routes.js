const express = require('express')
const router = express.Router()
const productosController = require('../controllers/productos.controllers')

// CRUD
//router. ... get / post / put / delete , etc

// GET /productos
router.get('/productos', async(req, res) => {
    const productos = await productosController.getAll()
    res.json(productos)
})

module.exports = router