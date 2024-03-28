const moment = require('moment')
moment.locale('es')
/**
 * 
 * @param {Array} users - ARREGLO DE USUARIOS QUE CONTIENE OBJETOS CON LOS ATRIBUTOS NAME Y CREATEDAT
 * @returns - LA LISTA DE USUARIOS CON EL ATRIBUTO ID, NAME Y FECHA DE CREACION PERO FORMATEADA
 */
const userList = (users) => {
    let list = []
    users.forEach( (user, index) => {
        // Se crear un objeto con el id, el nombre y la fecha de lectura
        // esto es un ejemplo de como se puede formatear la información
        // eso es el trabajo de la vista, darle formato a la información
        // es como el maquillaje de la información, la cara
        // como de ser una simple lista de nombres, se convierte en una lista de objetos con id, nombre y fecha de lectura
        list.push( {
            id: index + 1,
            name: user.name,
            fechaLectura: moment(user.createdAt).format('LLLL')
        })
    })

    return list
}

module.exports = {
    userList
}