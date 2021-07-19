'use strict';
module.exports = (sequelize, DataTypes) => {
  const DiveSpot = sequelize.define('DiveSpot', {
    discoveredBy: DataTypes.INTEGER,
    title: DataTypes.STRING,
    status: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  DiveSpot.associate = function(models) {
    DiveSpot.hasOne(models.User, {foreignKey: "discoveredBy"});
    DiveSpot.hasMany(models.Review, {foreignKey: "spotId"});
  };
  return DiveSpot;
};