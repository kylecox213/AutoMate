module.exports = function(sequelize, DataTypes) {
    let Vehicle = sequelize.define("Vehicle", {
        make: {
            type: DataTypes.STRING,
            allowNull: false
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER(4),
            allowNull: false
        },
        odometer: {
            type: DataTypes.INTEGER(6),
            allowNull: true
        },
        color: {
            type: DataTypes.STRING,
            allowNull: true
        },
        plateNumber: {
            type: DataTypes.STRING(8),
            allowNull: true
        },
        note: {
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