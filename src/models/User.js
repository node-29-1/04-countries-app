const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const User = sequelize.define('user', {
    first_name: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = User;