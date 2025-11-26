import { Model, DataTypes } from 'sequelize'
import { sequelize } from "../api/connection";

class Vote extends Model {
    declare voteID: number;
    declare voteDatetime: Date;
    declare candidateID: number;
}

Vote.init(
    {
        voteID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
        voteDatetime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        candidateID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'vote',
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        sequelize
    },
);

export { Vote }