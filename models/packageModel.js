const { DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const Package = sequelize.define('Package',{
    package_id : {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    monthly_fee: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    call_minutes: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_allowance: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description_details: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
    deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
},{
    tableName: 'packages',
    timestamps: true,
    createdAt: 'created_at',  
    updatedAt: 'updated_at',  
    deletedAt: 'deleted_at', 
    paranoid: true
})

module.exports = Package;
