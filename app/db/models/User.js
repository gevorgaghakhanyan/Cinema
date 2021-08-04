const { DataTypes } = require('sequelize');

const schema = {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const options = {
  tableName: 'users',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
};

module.exports = (sequelize) => {
  const model = sequelize.define('User', schema, options);
  return model;
};
