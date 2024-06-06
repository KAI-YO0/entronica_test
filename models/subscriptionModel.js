const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Customer = require('../models/customerModel');
const Package = require('./packageModel');
const CustomerAddress = require('./customerAddressModel');

const Subscription = sequelize.define('Subscription',{
  subscription_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
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
  package_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: Package,
      key: 'package_id'
    }
  },
  customer_address_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: CustomerAddress,
      key: 'customer_address_id'
    }
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
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
  tableName: 'subscriptions',
  timestamps: true,
  createdAt: 'created_at',  
  updatedAt: 'updated_at',  
  deletedAt: 'deleted_at', 
  paranoid: true
});

module.exports = Subscription;
