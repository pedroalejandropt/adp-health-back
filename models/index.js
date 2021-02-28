const database = process.env.NODE_ENV || '';
const dbConfig = require(`../configs/${database}db.js`);
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.roles = require("./role.model.js")(sequelize, Sequelize);
db.appointments = require("./appointment.model.js")(sequelize, Sequelize);
db.appointment_novelties = require("./appointment-novelty.model.js")(sequelize, Sequelize);

db.users.belongsTo(db.roles, {foreignKey: 'fk_role', targetKey: 'id'});
db.appointments.belongsTo(db.users, {foreignKey: 'fk_user', targetKey: 'id'});
db.appointment_novelties.belongsTo(db.appointments, {foreignKey: 'fk_appointment', targetKey: 'id'});

module.exports = db;