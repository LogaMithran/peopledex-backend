import {DataTypes, Model} from "sequelize";
import {sequelizeConnector} from "../connectors/rdsConnector";

export interface userAttributes {
    id: number;
    username: string;
    password: string;
    email: string;
}

export type userOptionalAttributes = keyof userAttributes;

export class User extends Model<
    userAttributes,
    userOptionalAttributes
> {
}

User.init(
    {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize: sequelizeConnector,
        tableName: "user",
        timestamps: false
    }
);
