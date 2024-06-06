const CustomerAddress = require('../models/customerAddressModel')

// Get all customerAddresses
exports.getAllCustomerAddresses = async (req, res) => {
    try {
      const customerAddresses = await CustomerAddress.findAll();
      res.status(200).send({
        success: true,
        message: "CustomerAddress Lists",
        data: customerAddresses,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  // Get customerAddress by ID
  exports.getCustomerAddressById = async (req, res) => {
    try {
      const customerAddress = await CustomerAddress.findByPk(req.params.id);
      if (customerAddress) {
        res.status(200).send({
          success: true,
          message: "CustomerAddress List",
          data: customerAddress,
        });
      } else {
        res.status(404).json({ message: 'CustomerAddress not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  // Create a new customerAddress
  exports.createCustomerAddress = async (req, res) => {
    try {
      const {customerAddress_id , address_type , street_address , village , 
        sub_district , district , province , postal_code , country , description} = req.body;

      const newCustomerAddress = await CustomerAddress.create({
        customerAddress_id,
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
  
  // Update a customerAddress
  exports.updateCustomerAddress = async (req, res) => {
    try {
      const customerAddress = await CustomerAddress.findByPk(req.params.id);
      if (customerAddress) {
        await customerAddress.update(req.body);
        res.status(200).send({
          success: true,
          message: "Edit CustomerAddress Successful",
          data: customerAddress,
        });
      } else {
        res.status(404).json({ message: 'CustomerAddress not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  // Delete a customerAddress
  exports.deleteCustomerAddress = async (req, res) => {
    try {
      const customerAddress = await CustomerAddress.findByPk(req.params.id);
      if (customerAddress) {
        await customerAddress.destroy();
        res.json({ message: 'CustomerAddress deleted successfully' });
      } else {
        res.status(404).json({ message: 'CustomerAddress not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };