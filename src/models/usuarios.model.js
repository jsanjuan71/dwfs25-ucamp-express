const { min } = require('moment');
const mongoose = require('mongoose');

const esquema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        minlength: 1,
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    contrasena: {
        type: String,
        required: true,
        minlength: 8
    },
    rol: {
        type: String,
        required: true,
        enum: ['admin', 'empleado', 'cliente'],
        default: 'cliente'
    }
})

const Usuario = mongoose.model('Usuario', esquema);

module.exports = Usuario;