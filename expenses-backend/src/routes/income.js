const express = require('express');
const router = express.Router();
const guard = require('./src/guard/guard');

const { createIncome, getIncome, getIncomes } = require('../controllers/income')

//POST
router.post('/income', guard, createIncome);

//GET ONE
router.get('/income/:id', guard, getIncome);

//GET MANY
router.get('/income', guard, getIncomes);

module.exports = router;