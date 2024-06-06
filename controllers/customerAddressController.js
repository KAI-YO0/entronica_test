const CustomerAddress = require('../models/customerAddressModel')

// Get all customers
exports.getAllCustomerAddresses = async (req, res) => {
    try {
      const customers = await CustomerAddress.findAll();
      res.status(200).send({
        success: true,
        message: "CustomerAddress Lists",
        data: customers,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  // Get customer by ID
  exports.getCustomerAddressById = async (req, res) => {
    try {
      const customer = await CustomerAddress.findByPk(req.params.id);
      if (customer) {
        res.status(200).send({
          success: true,
          message: "CustomerAddress List",
          data: customer,
        });
      } else {
        res.status(404).json({ message: 'CustomerAddress not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  // Create a new customer
  exports.createCustomerAddress = async (req, res) => {
    try {
      const {customer_id , address_type , street_address , village , 
        sub_district , district , province , postal_code , country , description} = req.body;

      const newCustomerAddress = await CustomerAddress.create({
        customer_id,
        address_type,
        street_address,
        village,
        sub_district,
        district, 
        province,
        postal_code,
        country,
        description
      })
      res.status(201).send({ message: "Create new CustomerAddress Success", success: true , newCustomerAddress});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  // Update a customer
  exports.updateCustomerAddress = async (req, res) => {
    try {
      const customer = await CustomerAddress.findByPk(req.params.id);
      if (customer) {
        await customer.update(req.body);
        res.status(200).send({
          success: true,
          message: "Edit CustomerAddress Successful",
          data: customer,
        });
      } else {
        res.status(404).json({ message: 'CustomerAddress not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  // Delete a customer
  exports.deleteCustomerAddress = async (req, res) => {
    try {
      const customer = await CustomerAddress.findByPk(req.params.id);
      if (customer) {
        await customer.destroy();
        res.json({ message: 'CustomerAddress deleted successfully' });
      } else {
        res.status(404).json({ message: 'CustomerAddress not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };