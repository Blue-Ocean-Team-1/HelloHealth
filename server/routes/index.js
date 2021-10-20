const express = require('express');
const userRouter = require('./user');
const productsRouter = require('./products');
const apiSchema = require('../controllers/apiSchema');

const router = express.Router();

router.use('/user', userRouter);
router.use('/products', productsRouter);
router.get('/*', apiSchema.returnAPISchema);

module.exports = router;
