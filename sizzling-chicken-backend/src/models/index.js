'use strict';
const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/database')[env];

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(__dirname)
  .filter(f => f !== 'index.js' && f.endsWith('.js'))
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize);
    db[model.name] = model;
  });

// Associations (will wire after models below)
Object.values(db).forEach(model => {
  if (typeof model.associate === 'function') model.associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;