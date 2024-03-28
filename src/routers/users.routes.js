const express = require('express')

const router = express.Router()

const userController = require('../controllers/users.controller')
const userView = require('../views/users.view')

// READ
router.get('/users', (req, res) => {
    // OBTIENE TODOS LOS USUARIOS, SE LOS PIDE AL CONTROLADOR
    const users = userController.getAllUsers()
    // FORMATEA LOS USUARIOS, SE LO PIDE A LA VISTA
    const finalUsers = userView.userList(users)
    
    // RESPONDE CON LOS USUARIOS FORMATEADOS
    res.json({
        error: false,
        result: finalUsers
    })
})

// CREATE
router.post('/users', (req, res) => {
    console.log(req.body)
    res.json({ message: 'User created', data: req.body})
})

// UPDATE
router.put("/users", (req, res) => {
    const edad = req.body.edad
    res.json({ message: `Tu nueva edad es ${edad}` })
})

// DELETE
router.delete("/users/:id", (req, res) => {
    const id = req.params.id
    res.json({ message: `Usuario con ID ${id} eliminado` })
})


module.exports = router