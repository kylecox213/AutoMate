module.exports = function(sequelize, DataTypes) {
    let Transaction = sequelize.define("Transaction", {
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        parts: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        partsPrice: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false
        },
        laborPrice: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false
        },
        tax: {
            type: DataTypes.DECIMAL(2, 2),
            allowNull: true
        },
        totalPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        invoice: {
            type: DataTypes.BLOB,
            allowNull: true
        }
    });

    return Transaction;
};