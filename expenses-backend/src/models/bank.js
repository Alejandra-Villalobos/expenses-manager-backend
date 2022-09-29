const { pool } = require('../utils/db');

module.exports.create = ({ account, name, currency, amount, user_name, person }) => {
    const bindings = { account, name, currency, amount, user_name, person };
    const SQL_INSERT_BANK = `INSERT INTO BANK(ID, ACCOUNT, NAME, CURRENCY, AMOUNT, USER_NAME, PERSON)
                                VALUES(SQ_BANK.NEXTVAL, :account, :name, :currency, :amount, :user_name, :person)`;
    return pool(SQL_INSERT_BANK, bindings, { autoCommit: true });
  };
  
  module.exports.fetchAll = ({ person }) => {
    const bindings = { person };
    const SQL_SELECT_BANKS = `SELECT
                                    ID as "id",
                                    ACCOUNT as "account",
                                    NAME as "name",
                                    CURRENCY as "currency",
                                    AMOUNT as "amount",
                                    USER_NAME as "user_name"
                                  FROM BANK
                                  WHERE PERSON = :person`;
    return pool(SQL_SELECT_BANKS, bindings);
  };
  
  module.exports.findById = ({ person, id }) => {
    const bindings = { person, id };
    const SQL_SELECT_BANK = `SELECT
                                    ID as "id",
                                    ACCOUNT as "account",
                                    NAME as "name",
                                    CURRENCY as "currency",
                                    AMOUNT as "amount",
                                    USER_NAME as "user_name"
                                  FROM BANK
                                  WHERE PERSON = :person
                                  AND ID = :id`;
    return pool(SQL_SELECT_BANK, bindings);
  };