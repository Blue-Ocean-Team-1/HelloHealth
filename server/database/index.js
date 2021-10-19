/* eslint-disable no-unused-vars */
/*
 * Connect Sequelize and
 * the PostgreSQL database
 * Note: Sequelize will use <rootDir>/config.json
 */

// const Pool = require('pg-pool');
const { Sequelize } = require('sequelize');
const { Pool } = require('pg');
const dbConfig = require('../config/db.config');
const modelInitializer = require('./models/init-models');

const sequelize = new Sequelize(dbConfig.DATABASE_URL, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const models = modelInitializer.initModels(sequelize);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customers = require('./models/modelFiles/customers')(sequelize, Sequelize);
db.farms = require('./models/modelFiles/farms')(sequelize, Sequelize);
db.messages = require('./models/modelFiles/messages')(sequelize, Sequelize);
db.nutrition_facts = require('./models/modelFiles/nutrition_facts')(sequelize, Sequelize);
db.product_category = require('./models/modelFiles/product_category')(sequelize, Sequelize);
db.product_quantity = require('./models/modelFiles/product_quantity')(sequelize, Sequelize);
db.products = require('./models/modelFiles/products')(sequelize, Sequelize);
db.transactions = require('./models/modelFiles/transactions')(sequelize, Sequelize);

// const modelNames = Object.keys(models);
// modelNames.forEach((modelKey) => {
//   db[modelKey] = models[modelKey];
// });

db.transactions.hasMany(db.customers, {as: 'transactions', foreignKey: 'id'});

module.exports = db;
