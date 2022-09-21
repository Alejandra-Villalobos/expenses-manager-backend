const Income = require('../models/income');

module.exports.createIncome = async (req, res, next) => {
    const args = {
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      amount: req.body.amount,
      bank: req.bank.id,
    };
    try {
      await Income.create(args);
      res.status(200).json({ message: 'Income created!' });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  };
  
  module.exports.getIncomes = async (req, res, next) => {
    const args = {
      bank: req.bank.id,
    };
    try {
      const { rows } = await Income.fetchAll(args);
      res.status(200).json({ data: rows });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  };
  
  module.exports.getIncome = async (req, res, next) => {
    const args = { bank: req.bank.id, id: Number(req.params.id) };
    try {
      const { rows } = await Income.findById(args);
      res.status(200).json({ data: rows });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  };