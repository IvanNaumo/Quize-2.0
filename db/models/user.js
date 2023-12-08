'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Theme}) {
      this.hasMany(Theme,{foreignKey:'userId'})
    }
  }
  User.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};