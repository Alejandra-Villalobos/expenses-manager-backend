const { pool } = require('../utils/db');

module.exports.create = ({ title, category, description, amount, to_account, to_bank, bank }) => {
    const bindings = { title, category, description, amount, to_account, to_bank, bank };
    const SQL_INSERT_INCOME = `INSERT INTO INCOME(ID, TITLE, CATEGORY, DESCRIPTION, AMOUNT, TO_ACCOUNT, TO_BANK, BANK)
                                VALUES(SQ_OUTCOME.NEXTVAL, :title, :category, :description, :amount, :to_account, :to_bank, :bank)`;
    return pool(SQL_INSERT_INCOME, bindings, { autoCommit: true });
  };
  
  module.exports.fetchAll = ({ bank }) => {
    const bindings = { bank };
    const SQL_SELECT_INCOMES = `SELECT TITLE, CATEGORY, DESCRIPTION, AMOUNT, ADD_DATE, TO_ACCOUNT, TO_BANK
                                  FROM INCOME
                                  WHERE BANK = :bank`;
    return pool(SQL_SELECT_INCOMES, bindings);
  };
  
  module.exports.findById = ({ bank, id }) => {
    const bindings = { bank, id };
    const SQL_SELECT_INCOME = `SELECT TITLE, CATEGORY, DESCRIPTION, AMOUNT, ADD_DATE, TO_ACCOUNT, TO_BANK
                                  FROM INCOME
                                  WHERE BANK = :bank
                                  AND ID = :id`;
    return pool(SQL_SELECT_INCOME, bindings);
  };