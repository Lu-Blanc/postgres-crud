import { Sequelize } from "sequelize";

const db = new Sequelize('user', 'postgres','admin',{
    host: 'localhost',
    dialect: 'postgres'
});

export default db;