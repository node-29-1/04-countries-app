const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Country = sequelize.define('country', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false
    },
    currency: {
        type: DataTypes.STRING,
        allowNull: false
    },
    flagUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // continentId
});

module.exports = Country;