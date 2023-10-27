const Sequelize = require('sequelize');

const Proyecto = (sequelize =>{
    sequelize.define('proyecto', {
        idProyecto:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        nombre:Sequelize.STRING,
        descripcion:Sequelize.STRING
    })
});
module.exports = Proyecto; //poder sacar el archivo aislado