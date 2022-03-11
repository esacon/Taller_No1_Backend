let data = require('../config/data')['character_stats']
const genId = 0;

module.exports = {

    async create(req, res) {
        const info = req.body;
        if (info.attribute_1 && info.attribute_2 && info.attribute_3) {
            const id = genId++;
            const newInfo = {
                life: info.attribute_1*20,
                power: info.attribute_1*10 + info.attribute_2*25,
                magic: info.attribute_3*100,
                attribute_1: info.attribute_1,
                attribute_2: info.attribute_2,
                attribute_3: info.attribute_3,                
                id: id                
            }
            data = [...data, newInfo];
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
            const info = data.filter(info => info.id === id);
            res.json(info);
        } else {
            res.status(404).end();
        }
    }, 

    async update(req, res) {        
        const id = parseInt(req.params.id);
        const upd = req.query;
        const dataID = data.find(info => info.id === id);
        if (dataID) {
            const info = data.filter(info => info.id === id);
            data = data.filter(info => info.id !== id);
            if (upd.attribute_1 && upd.attribute_2 && upd.attribute_3) { 
                info.attribute_1 = parseInt(upd.attribute_1);
                info.attribute_2 = parseInt(upd.attribute_2);
                info.attribute_3 = parseInt(upd.attribute_3);
                info.life = upd.attribute_1*20;
                info.power = upd.attribute_1*10 + upd.attribute_2*25;
                info.magic = upd.attribute_3*100;
                info.id = info.id
            }
            data = [...data, info];
            console.log(data)
            res.status(200).json({ message: 'Success' });
        } else {
            res.status(404).end();
        }
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