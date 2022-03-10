const Sequelize = require('sequelize');
const Donor = require("./donor")
const Article = require("./article")
const Club = require("./club")
const Crimson = require("./crimson");

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.Donor = Donor;
db.Article = Article;
db.Club = Club;
db.Crimson = Crimson;

Donor.init(sequelize)
Article.init(sequelize);
Club.init(sequelize)
Crimson.init(sequelize)

Donor.associate(db);
Article.associate(db);
Club.associate(db);
Crimson.associate(db);

module.exports = db;
