const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.send('<h1 style="color:red">Dulces Shop!!</h1>')
})

app.get('/menu', (request, response) => {
    response.send({
        message: 'success',
        data: [
            { id: 1, name: 'Alfajores' },
            { id: 2, name: 'Chocolates'},
        ]
    })
})



app.get('/products', (request, response) => {
    const id = request.query.id 
    const products = [
        { id: 1, name: "Alfajor", price: 150, description: "Alfajor simple de chocolate y relleno con dulce de leche", thumbnail:"https://res.cloudinary.com/dyxviqtpy/image/upload/v1679930638/alfajor_wclwfw.jpg", code:"dsjdsi", stock: 50 },
        { id: 2, name:"Chocolate", price: 100, description:"Barra de chocolate amargo", thumbnail:"https://res.cloudinary.com/dyxviqtpy/image/upload/v1679930638/chocolate_xq3fva.jpg",code:"dsjdsy",stock: 13 },
    ]
    const result = products.find(item => item.id == id)
    response.send(`Hola ${result.name}`)
})

app.listen(8080, () => console.log('Server Up'))