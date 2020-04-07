'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    comment: {
      type:DataTypes.TEXT,
      allowNull: false
    }
  },
    {});
  comment.associate = function(models) {
    comment.belongsTo(models.user)
    comment.belongsTo(models.service)
  };
  return comment;
};