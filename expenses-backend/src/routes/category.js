const express = require('express');
const router = express.Router();

const { createCategory, getCategory, getCategories } = require('../controllers/category')

//POST
router.post('/category', createCategory);

//GET ONE
router.get('/category/:id', getCategory);

//GET MANY
router.get('/category', getCategories);

module.exports = router;

