const Sequelize = require("sequelize")

module.exports = class Crimson extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            address: {
                type: Sequelize.STRING(200),
                allowNull: false
            },
            phone: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            level: {
                type: Sequelize.STRING(20),
                allowNull: false
            },


        }, {
            sequelize,
            timestamps: false,
            modelName: "Crimson",
            tableName: "crimsons",
            charset: "utf8mb4",
            collate: "utf8mb4_unicode_ci"
        })
    }
    static associate(db) {
        db.Crimson.hasMany(db.CrimsonArticle, { foreignKey: "crimson", sourceKey: 'id' })
    }
}