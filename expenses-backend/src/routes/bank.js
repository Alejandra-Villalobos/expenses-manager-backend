const express = require('express');
const router = express.Router();

const { createBank, getBank, getBanks } = require('../controllers/bank')

//POST
router.post('/bank', createBank);

//GET ONE
router.get('/bank/:id', getBank);

//GET MANY
router.get('/bank', getBanks);

module.exports = router;

