const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
//Crear servidor
const app = express();

//Conectar DB
conectarDB();
//middleware para poder usar diferentes puertos
app.use(cors());
//para poder leer archivos json
app.use(express.json());
//Nombrar la ruta para la api
app.use('/api/productos', require('./routes/producto'));
//Para saber si esta funcionando el servidor
app.listen(4000, () => {
    console.log('El servidor esta corriendo');
})