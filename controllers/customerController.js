const Customer = require('../models/customerModel')

// Get all customers
exports.getAllCustomers = async (req, res) => {
    try {
      const customers = await Customer.findAll();
      res.status(200).send({
        success: true,
        message: "Customer Lists",
        data: customers,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  // Get customer by ID
  exports.getCustomerById = async (req, res) => {
    try {
      const customer = await Customer.findByPk(req.params.id);
      if (customer) {
        res.status(200).send({
          success: true,
          message: "Customer List",
          data: customer,
        });
      } else {
        res.status(404).json({ message: 'Customer not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  // Create a new customer
  exports.createCustomer = async (req, res) => {
    try {
      const {first_name , last_name , birth_date , phone_number , email } = req.body;

      const newCustomer = await Customer.create({
        first_name,
        last_name,
        birth_date,
        phone_number,
        email,
      })
      res.status(201).send({ message: "Create new Customer Success", success: true , newCustomer});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  // Update a customer
  exports.updateCustomer = async (req, res) => {
    try {
      const customer = await Customer.findByPk(req.params.id);
      if (customer) {
        await customer.update(req.body);
        res.status(200).send({
          success: true,
          message: "Edit Customer Successful",
          data: customer,
        });
      } else {
        res.status(404).json({ message: 'Customer not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  // Delete a customer
  exports.deleteCustomer = async (req, res) => {
    try {
      const customer = await Customer.findByPk(req.params.id);
      if (customer) {
        await customer.destroy();
        res.json({ message: 'Customer deleted successfully' });
      } else {
        res.status(404).json({ message: 'Customer not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };