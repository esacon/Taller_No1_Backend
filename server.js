const express = require('express');
const app = express();
const cors = require('cors');
const colors = require('colors');

// Setting
const options = { origin: "http://localhost:3000" };
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Rutas
app.use('/character', require('./app/routes/route.character'));
app.use('/character_stats', require('./app/routes/route.character_stats'));
app.use('/images_2d', require('./app/routes/route.images_2d'));
app.use('/items', require('./app/routes/route.items'));
app.use('/missions', require('./app/routes/route.missions'));
app.use('/missions_objectives', require('./app/routes/route.missions_objectives'));
app.use('/model_3d', require('./app/routes/route.model_3d'));
app.use('/player_character', require('./app/routes/route.player_character'));
app.use('/players', require('./app/routes/route.players'));

// Arrancamos el servidor
app.listen(PORT, function () {
    console.log(`Servidor iniciado en el puerto ${PORT}`.green);
});