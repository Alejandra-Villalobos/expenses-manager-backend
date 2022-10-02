const express = require('express');
const router = express.Router();
const guard = require('../guard/guard');

const { createBank, getBank, getAllBanks, getBanks, updateBank } = require('../controllers/bank')

//POST
router.post('/bank', guard, createBank);

//GET ONE
router.get('/bank/:id', guard, getBank);

//GET MANY
router.get('/bank', guard, getBanks);

//GET ALL
router.get('/bank_all', guard, getAllBanks);

//PUT AMOUNT
router.put('/bank/:id', guard, updateBank);

module.exports = router;

