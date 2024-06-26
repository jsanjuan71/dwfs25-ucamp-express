const express = require('express')

const router = express.Router()

const userController = require('../controllers/usuarios.controller')

const bcryptjs = require('bcryptjs')

router.get('/usuarios', async(request, response) => {
    const usuarios = await userController.obterTodosUsuarios()
    response.json({
        resultado: usuarios
    })
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
        const result = await userController.add(nuevoUsuario)
        res.json({result})
    } catch(error){
        res.status(400).json({result: error.message})
    }
})

router.post('/usuarios/ingresar', async(req, res) => {
    try{
        const usuario = await userController.getByEmail(req.body.correo)
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

        const token = await userController.generarToken(payload)

        res.json({result: token})
        
    } catch(error){
        res.status(400).json({result: error.message})
    }
})

module.exports = router