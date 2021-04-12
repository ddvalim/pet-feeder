'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class FoodLog extends Model {
        static associate(models) {
            /* MODEL ASSOCIATIONS HERE */
        }
    }
    FoodLog.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            bowl_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            log: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
        }
    );
    return FoodLog;
};
