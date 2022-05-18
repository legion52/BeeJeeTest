'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Todo.init({
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    email: DataTypes.STRING,
    status: DataTypes.BOOLEAN, 
    changed: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};
