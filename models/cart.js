'use strict';
module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define('cart', {
  }, {});
  cart.associate = function(models) {
    cart.belongsTo(models.user)
    cart.belongsToMany(models.service, {through: "cartItems", foreignKey: "cartId"})
  };
  return cart;
};
