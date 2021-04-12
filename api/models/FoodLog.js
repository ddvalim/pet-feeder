module.exports = (sequelize, DataTypes) => {
    const FoodLog = sequelize.define('FoodLog', {
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
    });
  
    return FoodLog;
  }