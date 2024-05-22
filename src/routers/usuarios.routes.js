const express = require('express')
const router = express.Router()
const controller = require('../controllers/usuarios.controllers')
const bcryptjs = require('bcryptjs')

const authenticator = require('../middlewares/authorization')

// CRUD
//router. ... get / post / put / delete , etc

// GET /productos
router.get('/usuarios', authenticator, async(req, res) => {
    const usuarios = await controller.getAll()
    res.json(usuarios)
})

router.post('/usuarios', async(req, res) => {
    try{
        const passKey = await bcryptjs.genSalt(10)
        const claveEncriptada = await bcryptjs.hash(req.body.contrasena, passKey)
    
        const nuevoUsuario = {
            nombre: req.body.nombre,
            correo: req.body.correo,
            contrasena: claveEncriptada,
            rol: req.body.rol,
            passKey: passKey
        }
        const result = await controller.add(nuevoUsuario)
        res.json({result})
    } catch(error){
        res.status(400).json({result: error.message})
    }
})

router.post('/usuarios/ingresar', async(req, res) => {
    try{
        const usuario = await controller.getByEmail(req.body.correo)
        if(!usuario){
            return res.status(404).json({result: 'Usuario no encontrado'})
        }

        const claveCorrecta = await bcryptjs.compare(req.body.contrasena, usuario.contrasena)
        if(!claveCorrecta){
            return res.status(401).json({message: 'Contraseña incorrecta'})
        }

        const payload = {
            id: usuario._id,
            rol: usuario.rol
        }

        const token = await controller.generarToken(payload)

        res.json({result: token})
        
    } catch(error){
        res.status(400).json({result: error.message})
    }
})

module.exports = router