const express = require('express');
const router = express.Router();
const {
    getAllCustomerAddresses,
    getCustomerAddressById,
    createCustomerAddress,
    updateCustomerAddress,
    deleteCustomerAddress,
} = require('../controllers/customerAddressController');


router.get('/', getAllCustomerAddresses);
router.get('/:id', getCustomerAddressById);
router.post('/', createCustomerAddress);
router.put('/:id', updateCustomerAddress);
router.delete('/:id', deleteCustomerAddress);

module.exports = router;
