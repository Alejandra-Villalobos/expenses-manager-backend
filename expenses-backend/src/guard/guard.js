
const Guard = require('../models/guard');

module.exports = async (req, res, next) => {

  let isValidUser = true;
  if (isValidUser) {
    req.person = {
      person: 1,
      name: 'Ale',
      email: 'alemaria02@gmail.com',
      password: 'root',
    };
    return next();
  }
  return res.status(403).json({
    message: 'Unauthorized',
  });
};