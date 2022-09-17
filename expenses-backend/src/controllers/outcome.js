const Outcome = require('../models/outcome');

module.exports.createOutcome = async (req, res, next) => {
    const args = {
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      amount: req.body.amount,
      to_number: req.body.to_number,
      to_bank: req.body.to_bank,
      bank: req.bank.bank,
    };
    try {
      await Outcome.create(args);
      res.status(200).json({ message: 'Outcome created!' });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  };
  
  module.exports.getOutcomes = async (req, res, next) => {
    const args = {
      bank: req.bank.bank,
    };
    try {
      const { rows } = await Outcome.fetchAll(args);
      res.status(200).json({ data: rows });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  };
  
  module.exports.getOutcome = async (req, res, next) => {
    const args = { bank: req.bank.bank, id: Number(req.params.id) };
    try {
      const { rows } = await Outcome.findById(args);
      res.status(200).json({ data: rows });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  };