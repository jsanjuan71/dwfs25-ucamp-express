const express = require('express')

// SERVER initialization
const app = express()

// MIDDLEWARE
app.use(express.json())

// ROOT ROUTE
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the express API.' })
})

// READ
app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' }
    ])
})

// CREATE
app.post('/users', (req, res) => {
    console.log(req.body)
    res.json({ message: 'User created', data: req.body})
})

// UPDATE
app.put("/users", (req, res) => {
    const edad = req.body.edad
    res.json({ message: `Tu nueva edad es ${edad}` })
})

// DELETE
app.delete("/users/:id", (req, res) => {
    const id = req.params.id
    res.json({ message: `Usuario con ID ${id} eliminado` })
})

// SERVER LISTENING
app.listen(4000, () => {
    console.log('Server is running on port 3000')
})