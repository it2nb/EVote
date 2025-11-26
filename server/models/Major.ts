import { Model, DataTypes } from 'sequelize'
import { sequelize } from "../api/connection";

class Major extends Model {
    declare majorID: string;
    declare majorName: string;
    declare areaID: string;
}

Major.init(
    {
        majorID: {
        type: DataTypes.STRING(8),
        primaryKey: true
        },
        majorName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        areaID: {
            type: DataTypes.STRING(6),
            allowNull: false
        }
    },
    {
        tableName: 'major',
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        sequelize
    },
);

export { Major }