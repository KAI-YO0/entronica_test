const Package = require('../models/packageModel')

// Get all packages
exports.getAllPackages = async (req, res) => {
    try {
      const packages = await Package.findAll();
      res.status(200).send({
        success: true,
        message: "Package Lists",
        data: packages,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  // Get package by ID
  exports.getPackageById = async (req, res) => {
    try {
      const package = await Package.findByPk(req.params.id);
      if (package) {
        res.status(200).send({
          success: true,
          message: "Package List",
          data: package,
        });
      } else {
        res.status(404).json({ message: 'Package not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  // Create a new package
  exports.createPackage = async (req, res) => {
    try {
      const {name , monthly_fee , call_minutes , data_allowance , description_details} = req.body;

      const newPackage = await Package.create({
        name,
        monthly_fee,
        call_minutes,
        data_allowance,
        description_details,
      })
      res.status(201).send({ message: "Create new Package Success", success: true , newPackage});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  // Update a package
  exports.updatePackage = async (req, res) => {
    try {
      const package = await Package.findByPk(req.params.id);
      if (package) {
        await package.update(req.body);
        res.status(200).send({
          success: true,
          message: "Edit Package Successful",
          data: package,
        });
      } else {
        res.status(404).json({ message: 'Package not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  // Delete a package
  exports.deletePackage = async (req, res) => {
    try {
      const package = await Package.findByPk(req.params.id);
      if (package) {
        await package.destroy();
        res.json({ message: 'Package deleted successfully' });
      } else {
        res.status(404).json({ message: 'Package not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };