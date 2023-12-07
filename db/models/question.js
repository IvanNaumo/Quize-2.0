'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Theme}) {
      this.belongsTo(Theme, {foreignKey: 'themeId'})
    }
  }
  Question.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    img: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    answer: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    themeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Themes',
        key: 'id',
      },
      onDelete: 'cascade',
    },
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};