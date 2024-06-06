const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Customer = require('../models/customerModel');

const CustomerAddress = sequelize.define('CustomerAddress',{
  customer_address_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  customer_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: Customer,
      key: 'customer_id'
    }
  },
  address_type: {
    type: DataTypes.ENUM('home', 'shipping', 'billing'),
    allowNull: false
  },
  street_address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  village: {
    type: DataTypes.STRING,
    allowNull: true
  },
  sub_district: {
    type: DataTypes.STRING,
    allowNull: false
  },
  district: {
    type: DataTypes.STRING,
    allowNull: false
  },
  province: {
    type: DataTypes.STRING,
    allowNull: false
  },
  postal_code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.ENUM('thailand', 'usa', 'japan', 'korea'),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
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
}, {
  tableName: 'customer_addresses',
  timestamps: true,
  createdAt: 'created_at',  
  updatedAt: 'updated_at',  
  deletedAt: 'deleted_at', 
  paranoid: true
});

module.exports = CustomerAddress;
