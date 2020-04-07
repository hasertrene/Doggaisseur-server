'use strict';
module.exports = (sequelize, DataTypes) => {
  const cartItem = sequelize.define('cartItem', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
      }
    },
    {});
  cartItem.associate = function(models) {
    cartItem.belongsTo(models.service)
    cartItem.belongsTo(models.cart)
  };
  return cartItem;
};