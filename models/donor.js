const Sequelize = require("sequelize")

module.exports = class Donor extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            // id: {
            //     type: DataTypes.INTEGER,
            //     autoIncrement: true,
            //     primaryKey: true
            // },
            name: {
                type: Sequelize.STRING(),
                allowNull: false,
                // unique: true,
            },
            donationAmount: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false
            },
            role: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            major: {
                type: Sequelize.STRING(20),
            },
            class: {
                type: Sequelize.INTEGER,
            },
            faculty: {
                type: Sequelize.STRING(20),
            },
            facultyRole: {
                type: Sequelize.STRING(20),
            },

        }, {
            sequelize,
            timestamps: false,
            modelName: "Donor",
            tableName: "donors",
            charset: "utf8mb4",
            collate: "utf8mb4_unicode_ci"
        })
    }
    static associate(db) {
        db.Donor.hasMany(db.Article, { foreignKey: "donor", sourceKey: 'id' })
        db.Donor.belongsTo(db.Club, { foreignKey: "club", sourceKey: 'id' })
    }
}