import {Sequelize} from 'sequelize';
import {RdsConfig} from "../config/rdsConfig";

// @ts-ignore
export const sequelizeConnector = new Sequelize(null, null, null, {
    logging: true,
    dialect: 'mysql',
    replication: {
        read: [{
            port: RdsConfig.read.port,
            host: RdsConfig.read.host,
            username: RdsConfig.read.username,
            password: RdsConfig.read.password,
            database: RdsConfig.read.database,
        }],
        write: {
            port: RdsConfig.write.port,
            host: RdsConfig.write.host,
            username: RdsConfig.write.username,
            password: RdsConfig.write.password,
            database: RdsConfig.write.database,
        },
    },
    pool: {
        max: 5,
        min: 2,
        acquire: 30000,
        idle: 10000,
    },

});

try {
    console.log('Trying connect to RDS')
    sequelizeConnector
        .authenticate()
        .then(() => console.log('Connection has been established successfully.'))
        .catch((e) => console.log(e))
    ;
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
