const { DataTypes } = require('sequelize');

const schema = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cinema_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  start_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
};

const options = {
  tableName: 'movies',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
};

module.exports = (sequelize) => {
  const model = sequelize.define('Movie', schema, options);
  model.associate = function(models) {
    model.belongsTo(models.Cinema, {foreignKey: "id", as: 'cinema'});
    model.hasMany(models.Seat, { foreignKey: "movie_id", as: 'seats'});
  };
  return model;
};
