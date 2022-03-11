const Sequelize = require("sequelize")

module.exports = class CrimsonArticle extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            regdate: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            title: {
                type: Sequelize.STRING(200),
                allowNull: false
            },
            contents: {
                type: Sequelize.TEXT,
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: false,
            modelName: "CrimsonArticle",
            tableName: "crimsonArticles",
            paranoid: false,
            charset: "utf8mb4",
            collate: "utf8mb4_unicode_ci"
        })
    }
    static associate(db) {
        db.CrimsonArticle.belongsTo(db.Crimson, { foreignKey: "crimson", sourceKey: 'id' })
    }
}