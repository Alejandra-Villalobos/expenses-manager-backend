const express = require('express');
const router = express.Router();

const { createIncome, getIncome, getIncomes } = require('../controllers/income')

//POST
router.post('/income', createIncome);

//GET ONE
router.get('/income/:id', getIncome);

//GET MANY
router.get('/income', getIncomes);

module.exports = router;