import { Sequelize } from "sequelize";
import db from '../config/connection.js';

const User = db.define('users',{
    username : {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
    
},{
    freezeTableName: true
});

export default User;

// (async()=>{
//     await db.sync()
// })();
