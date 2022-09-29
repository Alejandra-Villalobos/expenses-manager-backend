const Outcome = require('../models/outcome');

module.exports.createOutcome = async (req, res, next) => {
    const args = {
      category: req.body.category,
      description: req.body.description,
      amount: req.body.amount,
      to_account: req.body.to_account,
      to_bank: req.body.to_bank,
      bank: req.body.bank,
      person: req.person.person,
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
      person: req.person.person,
    };
    try {
      const { rows } = await Outcome.fetchAll(args);
      res.status(200).json({ data: rows });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  };
  
  module.exports.getOutcome = async (req, res, next) => {
    const args = { person: req.person.person, id: Number(req.params.id) };
    try {
      const { rows } = await Outcome.findById(args);
      res.status(200).json({ data: rows });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  };