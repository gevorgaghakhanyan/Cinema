module.exports = {
  username: process.env.DB_USERNAME || 'test',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'cinema_db',
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT || 3306,
  dialect: 'mysql',
  dialectOptions: {
    bigNumberStrings: true,
  },
};
