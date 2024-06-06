// models/Subscription.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Customer = require('./Customer');
const Package = require('./Package');
const CustomerAddress = require('./CustomerAddress');

class Subscription extends Model {}

Subscription.init({
  subscription_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  customer_id: {
    type: DataTypes.BIGINT,
    references: {
      model: Customer,
      key: 'customer_id'
    }
  },
  package_id: {
    type: DataTypes.BIGINT,
    references: {
      model: Package,
      key: 'package_id'
    }
  },
  customer_address_id: {
    type: DataTypes.BIGINT,
    references: {
      model: CustomerAddress,
      key: 'customer_address_id'
    }
  },
  start_date: DataTypes.DATE,
  end_date: DataTypes.DATE
}, {
  sequelize,
  modelName: 'Subscription',
  tableName: 'subscriptions',
  timestamps: true
});

module.exports = Subscription;
