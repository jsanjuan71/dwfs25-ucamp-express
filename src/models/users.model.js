const fs = require('fs')
const path = require('path')

const readUsers = () => {
    /**
     * Para leer archivos se requiere usar rutas absolutas
     * __dirname es una variable global que nos da la ruta absoluta del archivo actual
     * path.join() nos permite unir rutas de forma segura
     * entonces path.join(__dirname, "users.txt") nos da la ruta absoluta del archivo users.txt
     * ejemplo: /Users/juliosanjuan/Documents/ucamp/ucamp-express/src/models/users.txt
     */ 
    console.log(__dirname) // ruta absoluta del archivo actual
    const fileContent = fs.readFileSync(path.join(__dirname, "users.txt") , 'utf-8')
    // fileContent es un string con el contenido del archivo 
    // cada usuario está separado por un salto de línea
    const users = fileContent.split('\n')
    // users es un array con los usuarios
    return users
}

module.exports = {
    readUsers
}