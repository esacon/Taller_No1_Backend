const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use(express.json())

let users = [{
    Username: "llherrera",
    Nombre: "Leonardo Herrera",
    idUser: 1
}, {
    Username: "jdherrera",
    Nombre: "Juan Herrera",
    idUser: 2
}]

genIdUser = 3;
let products = [{
    Precio: "100",
    Nombre: "Manzana",
    idProduct: 1
}, {
    Precio: "200",
    Nombre: "Pera",
    idProduct: 2
}]
genIdProd = 3
let compras = [{
    idUser: 1,
    idProduct: 1,
    idCompra: 1
}, {
    idUser: 1,
    idProduct: 1,
    idCompra: 2
}]
genIdComp = 3

/////////////////////
app.get('/usuarios', async (req, res) => {
    res.json(users)
});

app.get('/usuarios/:id', async (req, res) => {
    const id = Number(req.params.id)
    const userId = users.find(user => user.idUser === id)
    if (userId) {
        res.json(userId)
    } else {
        res.status(404).end()
    }
});
app.post('/usuarios', async (req, res) => {
    const user = req.body;
    if (user.Nombre && user.Username) {
        const id = genIdUser++
        const newUser = {
            Username: user.Username,
            Nombre: user.Nombre,
            idUser: id
        }
        users = [...users, newUser]
        res.status(200).json({ message: 'Success' })
    } else {
        res.status(400).end()
    }
});
app.put('/usuarios', async (req, res) => {
    console.log(req.query)
    res.status(200).json({ message: 'Success' })
});
app.delete('/usuarios/:id', async (req, res) => {
    const id = Number(req.params.id)
    const userId = users.find(user => user.idUser === id)
    if (userId) {
        users = users.filter(user => user.idUser !== id);
        res.status(204).json({ message: 'Success' })
    } else {
        res.status(404).end()
    }
});
///////////////////
app.get('/products', async (req, res) => {
    res.json(products)
});
app.get('/products/:id', async (req, res) => {
    const id = Number(req.params.id)
    const productId = products.find(product => product.idProduct === id)
    if (productId) {
        res.json(productId)
    } else {
        res.status(404).end()
    }
});
app.post('/products', async (req, res) => {
    const product = req.body;
    if (product.Nombre && product.Precio) {
        const id = genIdProd++
        const newProd = {
            Precio: product.Precio,
            Nombre: product.Nombre,
            idProduct: id
        }
        products = [...products, newProd]
        res.status(200).json({ message: 'Success' })
    } else {
        res.status(400).end()
    }
});
app.put('/productos', async (req, res) => {
    console.log(req.query)
    res.status(200).json({ message: 'Success' })
});
app.delete('/productos/:id', async (req, res) => {
    const id = Number(req.params.id)
    const prodId = products.find(prod => prod.idProduct === id)
    if (prodId) {
        products = products.filter(prod => prod.idProduct !== id);
        res.status(204).json({ message: 'Success' })
    } else {
        res.status(404).end()
    }
});
//////////////////////
app.get('/compras', async (req, res) => {
    res.json(compras)
});
app.post('/compras', async (req, res) => {
    const compra = req.body;
    if (compra.idUser && compra.idProduct) {
        const idU = Number(compra.idUser)
        const idP = Number(compra.idProduct)
        const prodId = products.find(prod => prod.idProduct === idP)
        const userId = users.find(user => user.idUser === idU)
        if (prodId && userId) {
            const id = genIdComp++
            const newCompra = {
                idUser: idU,
                idProduct: idP,
                idCompra: id
            }
            compras = [...compras, newCompra]
            res.status(200).json({ message: 'Success' })
        } else {
            res.status(400).end()
        }
    } else {
        res.status(400).end()
    }
});
app.delete('/compras/:id', async (req, res) => {
    const id = Number(req.params.id)
    const compId = compras.find(comp => comp.idCompra === id)
    if (compId) {
        compras = compras.filter(comp => comp.idCompra !== id);
        res.status(204).json({ message: 'Success' })
    } else {
        res.status(404).end()
    }
});



app.use(async (req, res) => {
    res.status(404).json({ message: "Not Found." })
});

app.listen(8080);