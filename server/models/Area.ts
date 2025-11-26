import { Model, DataTypes } from 'sequelize'
import { sequelize } from "../api/connection";

class Area extends Model {
    declare areaID: string;
    declare areaName: string;
    declare areaLevel: string;
}

Area.init(
    {
        areaID: {
        type: DataTypes.STRING(6),
        primaryKey: true
        },
        areaName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        areaLevel: {
            type: DataTypes.STRING(5),
            allowNull: false
        }
    },
    {
        tableName: 'area',
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        sequelize
    },
);

export { Area }