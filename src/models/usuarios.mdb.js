const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        minlength: 5
    },
    correo: {
        type: String,
        required: true,
        minlength: 5
    },
    contrasena: {
        type: String,
        required: true,
        minlength: 5
    },
    rol: {
        type: String,
        required: true,
        enum: ['admin', 'empleado', 'cliente'],
        default: 'cliente'
    },
    eliminado: {
        type: Boolean,
        default: false
    },
    passKey: String
})

module.exports = mongoose.model('Usuario', schema)