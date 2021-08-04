const { DataTypes } = require('sequelize');

const schema = {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  seats_count: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
};

const options = {
  tableName: 'cinemas',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
};

module.exports = (sequelize) => {
  const model = sequelize.define('Cinema', schema, options);

  model.associate = function(models) {
    model.hasMany(models.Movie, { foreignKey: "cinema_id", as: 'movies'})
  };

  return model;
};
