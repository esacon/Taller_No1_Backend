const data = [
    {
        life: 10,
        power: 100,
        magic: 5,
        attribute_1: 0,
        attribute_2: 2,
        attribute_3: 5,
    },    
    {
        life: 8,
        power: 100,
        magic: 5,
        attribute_1: 0,
        attribute_2: 2,
        attribute_3: 5,
    },
    {
        life: 2,
        power: 120,
        magic: 5,
        attribute_1: 0,
        attribute_2: 2,
        attribute_3: 5,
    }
];

module.exports = {

    async create(req, res) {
        const { nombre, apellido, cedula, rol, usuario, contraseña } = req.body;
    },

    async getAll(req, res) {
        res.json(data);
    },

    async getID(req, res) {
        const id = parseInt(req.params.id);
    }, 

    async update(req, res) {
        const id = parseInt(req.params.id);
    },

    async remove(req, res) {
        const id = parseInt(req.params.id);
    }

}