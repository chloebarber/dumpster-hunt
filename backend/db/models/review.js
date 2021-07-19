'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.DiveSpot, {foreignKey: "spotId"});
    Review.belongsTo(models.User, {foreignKey: "userId"});
  };
  return Review;
};