const Guard = require('../models/guard');
const { auth } = require('../config/config');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const authorizationHeader = req.get('Authorization');
  if (authorizationHeader) {
    const token = authorizationHeader.split(' ')[1];
    try {
      const decoded_token = jwt.verify(token, auth.token);
      if (decoded_token) {
        const args = { person: decoded_token['PERSON'] };
        const { rows: [PERSON] } = await Guard.person(args);
        if (PERSON) {
          req.person = {
            person: PERSON['PERSON'],
            name: PERSON['NAME'],
            email: PERSON['EMAIL'],
          }
          return next();
        }
      }
    } catch (error) {
      return res.status(403).json({
        message: 'Unauthorized',
      });
    }
  }
  return res.status(403).json({
    message: 'Unauthorized',
  });
};