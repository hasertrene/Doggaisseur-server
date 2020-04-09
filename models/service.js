'use strict';
module.exports = (sequelize, DataTypes) => {
  const service = sequelize.define('service', {
    name: {
      type: DataTypes.STRING,
      allowNull:false
      },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
      },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
      },
    imageUrl: {
      type: DataTypes.STRING,
      },
    },
  {});
  service.associate = function(models) {
  service.belongsToMany(models.cart, {
    through: "cartItems", 
    foreignKey: "serviceId"
    })
  service.hasMany(models.comment)
  service.belongsTo(models.category) 
  };
  return service;
};