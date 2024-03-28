const userModel = require('../models/users.model')

const IVA = 0.16

const getAllUsers = () => {
    // OBTIENE TODOS LOS USUARIOs, SE LOS PIDE AL MODELO
    const users = userModel.readUsers()
    // FORMATEA LOS USUARIOS PORQUE EL MODELO SOLO RETORNA UN ARRAY DE STRINGS
    const formattedUsers = users.map( user => {
        return { 
            name: user,
            createdAt: new Date()
        }
    } )
    return formattedUsers
}

module.exports = {getAllUsers}