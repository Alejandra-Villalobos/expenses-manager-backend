const { pool } = require('../utils/db');

module.exports.create = ({ account, name, currency, amount, person }) => {
    const bindings = { account, name, currency, amount, person };
    const SQL_INSERT_BANK = `INSERT INTO BANK(ID, ACCOUNT, NAME, CURRENCY, AMOUNT, PERSON)
                                VALUES(SQ_BANK.NEXTVAL, :account, :name, :currency, :amount, :person)`;
    return pool(SQL_INSERT_BANK, bindings, { autoCommit: true });
  };
  
  module.exports.fetchAll = ({ person }) => {
    const bindings = { person };
    const SQL_SELECT_BANKS = `SELECT
                                    ACCOUNT as "account",
                                    NAME as "name",
                                    CURRENCY as "currency",
                                    AMOUNT as "amount"
                                  FROM BANK
                                  WHERE PERSON = :person`;
    return pool(SQL_SELECT_BANKS, bindings);
  };
  
  module.exports.findById = ({ person, id }) => {
    const bindings = { person, id };
    const SQL_SELECT_BANK = `SELECT
                                    ACCOUNT as "account",
                                    NAME as "name",
                                    CURRENCY as "currency",
                                    AMOUNT as "amount"
                                  FROM BANK
                                  WHERE PERSON = :person
                                  AND ID = :id`;
    return pool(SQL_SELECT_BANK, bindings);
  };