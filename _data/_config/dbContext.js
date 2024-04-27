const dbConfig = require('./dbConfig');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USERNAME,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.DIALECT,
        port: dbConfig.PORT,
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log("Conectado com sucesso!");
    })
    .catch((err) => {
        console.log("Erro ao tentar conectar: " + err);
    });