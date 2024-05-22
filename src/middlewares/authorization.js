const jwt = require('jsonwebtoken')

const authorization = (req, res, next) => {
    try{
        if( !req.headers.authorization ){
            return res.status(401).json({result: 'Se requiere token de autorización'})
        }
        const token = req.headers.authorization.split(' ')[1]
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = payload
        next()
    } catch(error){
        res.status(401).json({result: 'Error en la verificación del token'})
    }
}

module.exports = authorization