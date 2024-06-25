const express = require('express')
const router = express.Router()
const productosController = require('../controllers/productos.controllers')
const upload = require('multer')({ dest: 'uploads/portadas/' })

// CRUD
//router. ... get / post / put / delete , etc

// GET /productos
router.get('/productos', async(req, res) => {
    const productos = await productosController.getAll()
    res.json(productos)
})

router.post('/productos', upload.single("portada"), async(req, res) => {
    try{
        const producto = req.body
        producto.portada = `${req.protocol}://${req.hostname}:${process.env.PORT}/${req.file.path.split("/").slice(1).join("/")}`
        const result = await productosController.create(producto)
        console.log("Producto creado", result)
        const productos = await productosController.getAll()
        res.json(productos)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router