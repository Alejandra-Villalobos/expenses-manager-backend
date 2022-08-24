const category = require('../models/category');

module.exports.createCategory = async (req, res, next) => {
    const args = { description: req.body.description }
    try {
        await category.create(args);
        res.status(200).json({ message: 'Category created!' });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

module.exports.getCategory = async (req, res, next) => {
    const args = { category: Number(req.params.id) }
    try {
        const result = await category.findById(args);
        res.status(200).json({ data: result });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

module.exports.getCategories = async (req, res, next) => {
    try {
        const rows = await category.fetchAll();
        res.status(200).json({ data: rows });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}