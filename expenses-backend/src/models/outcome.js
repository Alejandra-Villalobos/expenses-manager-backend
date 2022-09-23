const { pool } = require('../utils/db');

module.exports.create = ({ title, category, description, amount, to_account, to_bank, bank, person }) => {
    const bindings = { title, category, description, amount, to_account, to_bank, bank, person };
    const SQL_INSERT_OUTCOME = `INSERT INTO OUTCOME(ID, TITLE, CATEGORY, DESCRIPTION, AMOUNT, TO_ACCOUNT, TO_BANK, BANK, PERSON)
                                VALUES(SQ_OUTCOME.NEXTVAL, :title, :category, :description, :amount, :to_account, :to_bank, :bank, :person)`;
    return pool(SQL_INSERT_OUTCOME, bindings, { autoCommit: true });
  };
  
  module.exports.fetchAll = ({ person }) => {
    const bindings = { person };
    const SQL_SELECT_OUTCOMES = `SELECT
                                    TITLE as "title",
                                    CATEGORY as "category",
                                    DESCRIPTION as "description",
                                    AMOUNT as "amount",
                                    ADD_DATE as "add_date",
                                    TO_ACCOUNT as "to_account",
                                    TO_BANK as "to_bank",
                                    BANK as "bank"
                                  FROM OUTCOME
                                  WHERE PERSON = :person`;
    return pool(SQL_SELECT_OUTCOMES, bindings);
  };
  
  module.exports.findById = ({ person, id }) => {
    const bindings = { person, id };
    const SQL_SELECT_OUTCOME = `SELECT
                                    TITLE as "title",
                                    CATEGORY as "category",
                                    DESCRIPTION as "description",
                                    AMOUNT as "amount",
                                    ADD_DATE as "add_date",
                                    TO_ACCOUNT as "to_account",
                                    TO_BANK as "to_bank",
                                    BANK as "bank"
                                  FROM OUTCOME
                                  WHERE PERSON = :person
                                  AND ID = :id`;
    return pool(SQL_SELECT_OUTCOME, bindings);
  };