import { Model, DataTypes } from 'sequelize'
import { sequelize } from "../api/connection";

class Class extends Model {
    declare classID: string;
    declare className?: string;
    declare classAbbr?: string;
    declare majorID?: string;
    declare personnelID?: number;
    declare personnelID2?: number;
    declare year: number;
    declare areaName?: string;
    declare majorName?: string;
    declare classEnable: boolean;
}

Class.init(
    {
        classID: {
        type: DataTypes.STRING(10),
        primaryKey: true
        },
        className: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        classAbbr: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        majorID: {
            type: DataTypes.STRING(8),
            allowNull: true
        },
        personnelID: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        personnelID2: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        areaName: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        majorName: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        classEnable: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        tableName: 'class',
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        sequelize
    },
);

export { Class }