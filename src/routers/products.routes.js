const express = require('express')
const router = express.Router()
const productosController = require('../controllers/productos.controllers')
const authorization = require('../middlewares/authorization')
const { getUploadsFolder, removeBaseFolder } = require('../utils/files')
const upload = require('multer')({ dest: getUploadsFolder()+'/portadas/' })

// CRUD
//router. ... get / post / put / delete , etc

// GET /productos
router.get('/productos', authorization, async(req, res) => {
    const productos = await productosController.getAll()
    res.json(productos)
})

router.post('/productos', authorization, upload.single("portada"), async(req, res) => {
    try{
        const producto = req.body
        producto.portada = `${req.protocol}://${req.hostname}:${process.env.PORT}/${removeBaseFolder(req.file.path)}`
        const result = await productosController.create(producto)
        console.log("Producto creado", result)
        const productos = await productosController.getAll()
        res.json(productos)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router