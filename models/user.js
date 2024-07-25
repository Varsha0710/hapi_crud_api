const sequelize=require('../config/database');
const {DataTypes}=require('sequelize');

const User = sequelize.define('user', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  }
},
{
    tableName: 'user'
});

sequelize.sync();

module.exports = User;
