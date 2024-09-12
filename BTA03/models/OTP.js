const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const OTP = sequelize.define('OTP', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    otpCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    otpExpiry: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = OTP;
