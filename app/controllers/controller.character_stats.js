module.exports = {

    async create(req, res) {
        const { nombre, apellido, cedula, rol, usuario, contraseña } = req.body;
    },

    async getAll(req, res) {
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