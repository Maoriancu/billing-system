const express = require('express');
const router = express.Router();

const CreateTransaction = require('./create');
const DeleteTransaction = require('./delete');
const UpdateTransaction = require('./update');
const GetTransaction = require('./get-transaction');
const GetAllTransactions = require('./get-all-transactions');

router.post('/create', CreateTransaction);
router.post('/delete', DeleteTransaction);
router.post('/update', UpdateTransaction);
router.get('/get-transaction', GetTransaction);
router.get('/get-all-transactions', GetAllTransactions);

module.exports = router;
