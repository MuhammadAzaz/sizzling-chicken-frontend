require('dotenv').config();

const common = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  dialect: process.env.DB_DIALECT || 'mysql',
  dialectOptions: { multipleStatements: true },
  logging: false,
  define: {
    underscored: false,
    freezeTableName: false,
    timestamps: false
  }
};

module.exports = {
  development: common,
  test: { ...common, database: `${process.env.DB_NAME}_test`, logging: false },
  production: { ...common, logging: false },
};