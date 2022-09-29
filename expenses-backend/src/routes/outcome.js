const express = require('express');
const router = express.Router();
const guard = require('../guard/guard');

const { createOutcome, getOutcome, getOutcomes } = require('../controllers/outcome')

//POST
router.post('/outcome', guard, createOutcome);

//GET ONE
router.get('/outcome/:id', guard, getOutcome);

//GET MANY
router.get('/outcome', guard, getOutcomes);

module.exports = router;