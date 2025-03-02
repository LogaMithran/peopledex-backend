require('dotenv').config();
export const RdsConfig = {
    read: {
        port: process.env.MYSQL_PORT,
        host: process.env.MYSQL_HOST,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    },
    write: {
        port: process.env.MYSQL_PORT,
        host: process.env.MYSQL_HOST,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    }
}