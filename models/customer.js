export default function(sequelize, DataTypes) {
    let Customer = sequelize.define("Customer", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        unit: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING(2),
            allowNull: false
        },
        zipCode: {
            type: DataTypes.INTEGER(5),
            allowNull: false
        },
        phone: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Customer.associate = function(models) {
        Customer.belongsToMany(models.Customer, { through: 'RelationsCC' })
        Customer.belongsToMany(models.Vehicle, { through: 'RelationsCV' })
        Customer.belongsToMany(models.Transaction, { through: 'RelationsCT' });
    }
    return Customer;
};