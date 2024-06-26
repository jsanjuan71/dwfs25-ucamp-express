const express = require('express')
const dotenv = require('dotenv')
const { MongoClient, ObjectId } = require('mongodb');
const mongoose = require('mongoose')
const cors = require("cors")
const bodyParser = require('body-parser')


const usersRouter = require('./routers/users.routes')
const productsRouter = require('./routers/products.routes')

const usuariosRouter = require('./routers/usuarios.routes');
const multer = require('multer');

// Load environment variables
dotenv.config()

console.log("puerto", process.env.PORT)

// SERVER initialization
const app = express()

mongoose.connect( process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())

app.use(express.json())

app.use( express.static('uploads') )

// ROUTERS
app.use( usersRouter )
app.use( productsRouter )

app.use( usuariosRouter )

// ROOT ROUTE
app.get('/', async(req, res) => {
    let productosEncontrados = []
    try{
        const client = new MongoClient( process.env.MONGODB_URL )
        const base_ucam_store = client.db("ucamp_store")
        const productos = base_ucam_store.collection("productos")
        const query = productos.find({marca: "Apple"})
        const listaProductos = await query.toArray()
        console.log(listaProductos.length, "productos encontrados")

        // Forma encadenada, hace lo mismo que arriba pero en el vuelo
        // evitando la creación de variables innecesarias
        productosEncontrados = await (
            new MongoClient( process.env.MONGODB_URL ) //const client
                .db("ucamp_store") // const base_ucam_store
                .collection("productos") // const productos
                .find({marca: "Apple"}) // const query
                .toArray() ); // const listaProductos

    } catch(error) {
        console.log(error)
    } finally {
        res.json({ message: 'Welcome to the express API.', result: productosEncontrados })
    }
    
})

// SERVER LISTENING
app.listen( process.env.PORT , () => {
    console.log('Server is running on port ', process.env.PORT)
})