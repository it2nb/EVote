import { Model, DataTypes } from 'sequelize'
import { sequelize } from "../api/connection";

class Studentvote extends Model {
    declare studentID: string;
    declare studentvoteDate: Date;
    declare studentvoteStatus: boolean;
}

Studentvote.init(
    {
        studentID: {
        type: DataTypes.STRING(12),
        primaryKey: true
        },
        studentvoteDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        studentvoteStatus: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        tableName: 'studentvote',
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        sequelize
    },
);

export { Studentvote }