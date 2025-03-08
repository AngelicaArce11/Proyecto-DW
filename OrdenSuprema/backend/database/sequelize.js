import { Sequelize } from 'sequelize'
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(process.env.DATABASE_URL,{
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, 
        }
    },
    logging: false 
});

    // 'OrdenSuprema',
    // 'postgres',
    // 'postgres123',
    // {
    //     host: 'localhost',
    //     dialect: 'postgres'
    // }
// );
