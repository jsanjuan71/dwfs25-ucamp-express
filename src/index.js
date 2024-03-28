const express = require('express')
const dotenv = require('dotenv')
const usersRouter = require('./routers/users.routes')
const productsRouter = require('./routers/products.routes')

// Load environment variables
dotenv.config()

console.log("puerto", process.env.PORT)

// SERVER initialization
const app = express()

// MIDDLEWARE
app.use(express.json())

// ROUTERS
app.use( usersRouter )
app.use( productsRouter )

// ROOT ROUTE
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the express API.' })
})

// SERVER LISTENING
app.listen( process.env.PORT , () => {
    console.log('Server is running on port ', process.env.PORT)
})