const Sequelize = require("sequelize")

module.exports = class SportStar extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            genre: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true
            },
            major: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            description: {
                type: Sequelize.TEXT,
            }

        }, {
            sequelize,
            timestamps: false,
            modelName: "SportsStar",
            tableName: "sportsStars",
            paranoid: false,
            charset: "utf8mb4",
            collate: "utf8mb4_unicode_ci"
        })
    }
    static associate(db) {

    }
}