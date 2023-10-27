//Como utilizar la herramineta ORM Sequelize
const Sequelize = require("sequelize");
//Configurar la conexión
//mysql -u admin -h -P 3306 -p (la p mayuscula es para el puerto)
const sequelize = new Sequelize('semanatec', 'admin', 'Baguira.2003',{
    dialect: 'mysql',
    host: 'database-1.cqbxcu7uxjlm.us-east-1.rds.amazonaws.com',
    define:{
        //Evitar que nos pornga createdAt y updateAt
        timelaps:false,
        //Pluralizar
        freezeTableName:true
    }
});

const Ejemplo = sequelize.define('ejemplo', {
    idTrabajo:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    descripcion:{
        type: Sequelize.STRING,
        allowNull:false
    }
})

const Ejemplo2 = sequelize.define('ejemplo', {
    idTrabajo:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    descripcion:{
        type: Sequelize.STRING,
        allowNull:false
    }
})

//Prueba de conexion, cuando ejecutas sync haz then
sequelize.sync()
    .then(result =>{
        console.log("Conectado");
    })
    .catch(error =>{
        console.log(error);
    })