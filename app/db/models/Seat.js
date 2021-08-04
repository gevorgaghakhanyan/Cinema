const { DataTypes } = require('sequelize');

const schema = {
  movie_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  cinema_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

const options = {
  tableName: 'seats',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
};

module.exports = (sequelize) => {
  const model = sequelize.define('Seat', schema, options);
  model.associate = function(models) {
    model.belongsTo(models.Movie, {foreignKey: "id", as: 'movie'});
  };
  return model;
};
