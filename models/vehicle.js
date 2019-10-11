module.exports = function(sequelize, DataTypes) {
    let Vehicle = sequelize.define("Vehicle", {
        Make: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Year: {
            type: DataTypes.INTEGER(4),
            allowNull: false
        },
        Color: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        plateNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        VIN: {
            type: DataTypes.INTEGER(17),
            allowNull: true
        }
    });

    Vehicle.associate = function(models) {
        Vehicle.belongsToMany(models.Transaction, { through: 'RelationsVT' });
    }

    return Vehicle;
};