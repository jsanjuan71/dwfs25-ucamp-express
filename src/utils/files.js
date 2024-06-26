
/**
 * @returns The uploads folder to store files
 */
const getUploadsFolder = () => {
    return 'uploads/'
}

/**
 * @param {String} path - The full path of the file
 * @returns The path without the base folder
 * @example - removeBaseFolder("uploads/portadas/imagen.jpg") => "portadas/imagen.jpg"
 */
const removeBaseFolder = (path) => {
    return path.split("/").slice(1).join("/")
}

module.exports = {
    getUploadsFolder,
    removeBaseFolder
}
