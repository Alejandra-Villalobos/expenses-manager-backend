const express = require('express');
const router = express.Router();
const guard = require('./src/guard/guard');

const { createBank, getBank, getBanks } = require('../controllers/bank')

//POST
router.post('/bank', guard, createBank);

//GET ONE
router.get('/bank/:id', guard, getBank);

//GET MANY
router.get('/bank', guard, getBanks);

module.exports = router;

