//importar bibliotecas
const express = require("express");
const app = express();
const sequelize = require('./util/database')
const personaRoutes = require('./routes/persona')
const proyectoRoutes = require('./routes/proyecto')
//middleware
app.use(express.json());
app.use('/persona',personaRoutes);
app.use('/proyecto',proyectoRoutes);
//Mala práctica
// app.get('/test', (request, response)=>{
//     console.log("Esto no se debe de hacer pero funciona");
//     response.send('<h1>Servidor funcionando</h1>');
// })

sequelize.sync() //{force:true}, se hace una sola vez, borrar tablas creadas antes
    .then(result=>{
        app.listen(8080,()=>{
            console.log("Servidor escuchando 👍 🥇")
        })
    })
    .catch(error=>console.log(error));