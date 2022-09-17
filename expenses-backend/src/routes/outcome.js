const express = require('express');
const router = express.Router();

const { createOutcome, getOutcome, getOutcomes } = require('../controllers/outcome')

//POST
router.post('/outcome', createOutcome);

//GET ONE
router.get('/outcome/:id', getOutcome);

//GET MANY
router.get('/outcome', getOutcomes);

module.exports = router;