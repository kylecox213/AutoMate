const bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isUserName: true
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    User.associate = function(models) {
        User.belongsTo(models.Transaction, {
            foreignkey: {
                allowNull: true
            }
        });

        User.belongsTo(models.Report, {
            foreignkey: {
                allowNull: true
            }
        });

    };

    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    User.addHook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
    });

    return User;
};