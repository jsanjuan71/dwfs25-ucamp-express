const express = require('express')

const router = express.Router()

const userController = require('../controllers/usuarios.controller')

router.get('/usuarios', async(request, response) => {
    const usuarios = await userController.obterTodosUsuarios()
    response.json({
        resultado: usuarios
    })
})

module.exports = router