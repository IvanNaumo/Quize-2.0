'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataType lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,Question}) {
      this.belongsTo(User, {foreignKey:'userId'})
      this.hasMany(Question, {foreignKey: 'themeId'})
    }
  }
  Theme.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    img: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'cascade',
    },
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};