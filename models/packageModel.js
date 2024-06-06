const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database')
const Package = require('./Package');

class Package extends Model {}

Package.init({
    package_id : {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    monthly_fee: DataTypes.DECIMAL,
    call_minutes: DataTypes.STRING,
    data_allowance: DataTypes.STRING,
    description_details: DataTypes.TEXT
},{
    sequelize,
    modelName: 'Package',
    tableName: 'packages',
    timestamps: true
})