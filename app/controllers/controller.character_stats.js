let data = require('../config/data')['character_stats']
const genId = 0;

module.exports = {

    async create(req, res) {
        const { nombre, apellido, cedula, rol, usuario, contraseña } = req.body;
        const user = req.body;
        if (user.Nombre && user.Username) {
            const id = genId++;
            const newUser = {
                Username: user.Username,
                Nombre: user.Nombre,
                idUser: id
            }
            data = [...data, data];
            res.status(200).json({ message: 'Success' });
        } else {
            res.status(400).end();
        }
    },

    async getAll(req, res) {
        res.json(data);
    },

    async getID(req, res) {
        const id = parseInt(req.params.id);
        const dataID = data.find(info => info.id === id);
        if (dataID) {
            console.log(data)
            const info = data.filter(info => info.id === id);
            console.log(info)
            res.status(204).json();
        } else {
            res.status(404).end();
        }
    }, 

    async update(req, res) {
        const id = parseInt(req.params.id);
    },

    async remove(req, res) {
        const id = parseInt(req.params.id);
        const dataID = data.find(info => info.id === id);
        if (dataID) {
            data = data.filter(info => info.id !== id);
            res.status(204).json({ message: 'Success' });
        } else {
            res.status(404).end();
        }
    }


}