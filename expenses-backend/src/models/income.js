const { pool } = require('../utils/db');

module.exports.create = ({ title, category, description, amount, bank }) => {
    const bindings = { title, category, description, amount, bank };
    const SQL_INSERT_INCOME = `INSERT INTO INCOME(ID, TITLE, CATEGORY, DESCRIPTION, AMOUNT, BANK)
                                VALUES(SQ_INCOME.NEXTVAL, :title, :category, :description, :amount, :bank)`;
    return pool(SQL_INSERT_INCOME, bindings, { autoCommit: true });
  };
  
  module.exports.fetchAll = ({ bank }) => {
    const bindings = { bank };
    const SQL_SELECT_INCOMES = `SELECT TITLE, CATEGORY, DESCRIPTION, AMOUNT
                                  FROM INCOME
                                  WHERE BANK = :bank`;
    return pool(SQL_SELECT_INCOMES, bindings);
  };
  
  module.exports.findById = ({ bank, id }) => {
    const bindings = { bank, id };
    const SQL_SELECT_INCOME = `SELECT TITLE, CATEGORY, DESCRIPTION, AMOUNT
                                  FROM INCOME
                                  WHERE BANK = :bank
                                  AND ID = :id`;
    return pool(SQL_SELECT_INCOME, bindings);
  };