const Sequelize = require('sequelize');
//const Proyecto = require('./proyecto');

const ProyectoPersona = (sequelize =>{
    sequelize.define('proyectopersona', {
       estado:Sequelize.STRING(20)
    })
});
module.exports = ProyectoPersona; //poder sacar el archivo aislado