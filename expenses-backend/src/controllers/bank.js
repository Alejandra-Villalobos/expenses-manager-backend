const Bank = require('../models/bank');

module.exports.createBank = async (req, res, next) => {
    const args = {
      name: req.body.name,
      currency: req.body.currency,
      amount: req.body.amount,
      person: req.person.person,
    };
    try {
      await Bank.create(args);
      res.status(200).json({ message: 'Bank created!' });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  };
  
  module.exports.getBanks = async (req, res, next) => {
    const args = {
      person: req.person.person,
    };
    try {
      const { rows } = await Bank.fetchAll(args);
      res.status(200).json({ data: rows });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  };
  
  module.exports.getBank = async (req, res, next) => {
    const args = { person: req.person.person, id: Number(req.params.id) };
    try {
      const { rows } = await Bank.findById(args);
      res.status(200).json({ data: rows });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  };