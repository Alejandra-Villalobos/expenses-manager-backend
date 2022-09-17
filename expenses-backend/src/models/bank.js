const { pool } = require('../utils/db');

module.exports.create = ({ name, currency, amount, person }) => {
    const bindings = { name, currency, amount, person };
    const SQL_INSERT_BANK = `INSERT INTO BANK(ID, NAME, CURRENCY, AMOUNT, PERSON)
                                VALUES(SQ_BANK.NEXTVAL, :name, :currency, :amount, :person)`;
    return pool(SQL_INSERT_BANK, bindings, { autoCommit: true });
  };
  
  module.exports.fetchAll = ({ person }) => {
    const bindings = { person };
    const SQL_SELECT_BANKS = `SELECT NAME, CURRENCY, AMOUNT
                                  FROM BANK
                                  WHERE PERSON = :person`;
    return pool(SQL_SELECT_BANKS, bindings);
  };
  
  module.exports.findById = ({ person, id }) => {
    const bindings = { person, id };
    const SQL_SELECT_BANK = `SELECT NAME, CURRENCY, AMOUNT
                                  FROM BANK
                                  WHERE PERSON = :person
                                  AND ID = :id`;
    return pool(SQL_SELECT_BANK, bindings);
  };