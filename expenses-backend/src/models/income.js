const { pool } = require('../utils/db');

module.exports.create = ({ title, category, description, amount, bank, person }) => {
    const bindings = { title, category, description, amount, bank, person };
    const SQL_INSERT_INCOME = `INSERT INTO INCOME(ID, TITLE, CATEGORY, DESCRIPTION, AMOUNT, BANK, PERSON)
                                VALUES(SQ_INCOME.NEXTVAL, :title, :category, :description, :amount, :bank, :person)`;
    return pool(SQL_INSERT_INCOME, bindings, { autoCommit: true });
  };
  
  module.exports.fetchAll = ({ person }) => {
    const bindings = { person };
    const SQL_SELECT_INCOMES = `SELECT 
                                    TITLE as "title",
                                    CATEGORY as "category",
                                    DESCRIPTION as "description",
                                    AMOUNT as "amount",
                                    ADD_DATE as "add_date",
                                    BANK as "bank"
                                  FROM INCOME
                                  WHERE PERSON = :person`;
    return pool(SQL_SELECT_INCOMES, bindings);
  };
  
  module.exports.findById = ({ person, id }) => {
    const bindings = { person, id };
    const SQL_SELECT_INCOME = `SELECT
                                    TITLE as "title",
                                    CATEGORY as "category",
                                    DESCRIPTION as "description",
                                    AMOUNT as "amount",
                                    ADD_DATE as "add_date",
                                    BANK as "bank"
                                  FROM INCOME
                                  WHERE PERSON = :person
                                  AND ID = :id`;
    return pool(SQL_SELECT_INCOME, bindings);
  };