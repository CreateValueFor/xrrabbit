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
            role: {
                type: Sequelize.STRING(200),
                allowNull: false
            },
            belong: {
                type: Sequelize.STRING(200),
            },
            position: {
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