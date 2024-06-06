const express = require('express');
const router = express.Router();
const {
    getAllSubscriptions,
    getSubscriptionById,
    createSubscription,
    updateSubscription,
    deleteSubscription,
    newCustomerReportCount,
    newCustomerReportList,
} = require('../controllers/subscriptionController');


router.get('/', getAllSubscriptions);
router.get('/:id', getSubscriptionById);
router.post('/', createSubscription);
router.put('/:id', updateSubscription);
router.delete('/:id', deleteSubscription);

router.post('/new_customer_count', newCustomerReportCount);
router.post('/new_customer_list', newCustomerReportList);


module.exports = router;
