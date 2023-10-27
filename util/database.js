//Como utilizar la herramineta ORM Sequelize
const Sequelize = require("sequelize");
const {applyRelations} = require('./relations')
//Configurar la conexión
//mysql -u admin -h -P 3306 -p (la p mayuscula es para el puerto)
const sequelize = new Sequelize('semanatec', 'admin', 'Baguira.2003',{
    dialect: 'mysql',
    host: 'database-1.cqbxcu7uxjlm.us-east-1.rds.amazonaws.com',
    define:{
        //Evitar que nos pornga createdAt y updateAt
        timestamps:false,
        //Pluralizar
        freezeTableName:true
    }
});

const modelDefiners = [
    require('../models/persona'),
    require('../models/proyecto'),
    require('../models/proyectoPersona')
];

for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

//Construir relaciones
applyRelations(sequelize);
//exportar el elemento de conexion
module.exports = sequelize;