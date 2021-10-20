const express = require('express');
const {
  getUserAccountType,
  getAccountDetails,
  updateSubscription,
  getAllTransactions,
  getTransaction,
  updateTransaction,
  getAllUsers,
  updateAccountDetails,
} = require('../../controllers/user');

const router = express.Router();

router.get('/all', getAllUsers);
router.get('/account-type', getUserAccountType);
router.post('/account-type', getUserAccountType);
router.get('/account-details', getAccountDetails);
router.post('/account-details', updateAccountDetails);
router.post('/subscription-status', updateSubscription);
router.get('/transaction/all', getAllTransactions);
router.get('/transaction', getTransaction);
router.put('/transaction', updateTransaction);

module.exports = router;
