module.exports = function(sequelize, DataTypes) {
    let Report = sequelize.define("Report", {
        dateBegin: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        dateEnd: {
            type: DataTypes.DATE,
            allowNull: false
        },
        salesResolution: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        revenueResolution: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        report: {
            type: DataTypes.BLOB,
            allowNull: false,
        }
    });

    return Report;
};