const { pool } = require('../utils/db');

module.exports.register = ({ name, email, password }) => {
  const bindings = { name, email, password };
  const SQL_INSERT_PERSON = `INSERT INTO PERSON(PERSON, NAME, EMAIL, PASSWORD)
                            VALUES(SQ_PERSON.NEXTVAL, :name, :email, :password)`;
  return pool(SQL_INSERT_PERSON, bindings, { autoCommit: true });
};

module.exports.login = ({ email }) => {
  const bindings = { email };
  const SQL_SELECT_PERSON = `SELECT 
                                PERSON AS "person", 
                                NAME AS "name", 
                                EMAIL AS "email", 
                                PASSWORD AS "password"
                            FROM PERSON
                            WHERE EMAIL = :email`;
  return pool(SQL_SELECT_PERSON, bindings);
};