const express = require('express');
const userRouter = require('./user');
const farmRouter = require('./farmers');

const router = express.Router();

router.use('/user', userRouter);
router.use('/product', productRouter);

router.use('/farmers', farmRouter);

module.exports = router;
