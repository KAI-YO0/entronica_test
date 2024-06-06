const Subscription = require('../models/subscriptionModel')
const sequelize  = require('../config/database');
const { QueryTypes } = require('sequelize');

// Get all subscriptions
exports.getAllSubscriptions = async (req, res) => {
    try {
      const subscriptions = await Subscription.findAll();
      res.status(200).send({
        success: true,
        message: "Subscription Lists",
        data: subscriptions,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  // Get subscription by ID
  exports.getSubscriptionById = async (req, res) => {
    try {
      const subscription = await Subscription.findByPk(req.params.id);
      if (subscription) {
        res.status(200).send({
          success: true,
          message: "Subscription List",
          data: subscription,
        });
      } else {
        res.status(404).json({ message: 'Subscription not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  // Create a new subscription
  exports.createSubscription = async (req, res) => {
    try {
      const {customer_id , package_id , customer_address_id , start_date , end_date} = req.body;

      const newSubscription = await Subscription.create({
        customer_id,
        package_id,
        customer_address_id,
        start_date,
        end_date,
      })
      res.status(201).send({ message: "Create new Subscription Success", success: true , newSubscription});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  // Update a subscription
  exports.updateSubscription = async (req, res) => {
    try {
      const subscription = await Subscription.findByPk(req.params.id);
      if (subscription) {
        await subscription.update(req.body);
        res.status(200).send({
          success: true,
          message: "Edit Subscription Successful",
          data: subscription,
        });
      } else {
        res.status(404).json({ message: 'Subscription not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  // Delete a subscription
  exports.deleteSubscription = async (req, res) => {
    try {
      const subscription = await Subscription.findByPk(req.params.id);
      if (subscription) {
        await subscription.destroy();
        res.json({ message: 'Subscription deleted successfully' });
      } else {
        res.status(404).json({ message: 'Subscription not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  // new customers count
  exports.newCustomerReportCount =  async (req, res) => {
    try {
        const sqlQuery = `
            SELECT DATE(start_date) AS registration_date, COUNT(*) AS new_customers
            FROM Subscriptions
            GROUP BY registration_date
            ORDER BY registration_date
            `

        const newCustomerReport = await sequelize.query(sqlQuery, { type: QueryTypes.SELECT });

        res.json({ message: 'New customers count successfully', newCustomerReport });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  // new customers list
  exports.newCustomerReportList =  async (req, res) => {
    try {
        const sqlQuery = `
            SELECT customer_id  AS CustomerID , Date (start_date) AS registration_date, package_id AS PackageID 
            FROM Subscriptions 
            ORDER BY customer_id, registration_date;
            `

        const newCustomerReport = await sequelize.query(sqlQuery, { type: QueryTypes.SELECT });
        res.json({ message: 'New customers  successfully', newCustomerReport });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
  };
