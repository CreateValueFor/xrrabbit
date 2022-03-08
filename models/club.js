const Sequelize = require("sequelize")

module.exports = class Club extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            club: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            donationStandard: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false
            },
        }, {
            sequelize,
            timestamps: false,
            modelName: "Club",
            tableName: "clubs",
            charset: "utf8mb4",
            collate: "utf8mb4_unicode_ci"
        })
    }
    static associate(db) {
        db.Club.hasMany(db.Donor, { foreignKey: "club", sourceKey: 'id' })
    }
}