const express = require('express');
const { getUserAccountType } = require('../../controllers/user');

const router = express.Router();

router.get('/account-type', getUserAccountType);

module.exports = router;
