const express = require('express');
const app = express();
const oracle = require('./src/utils/db');
const { server } = require('./src/config/config');
const cors = require('cors');

const routes_person = require('./src/routes/person');
const routes_bank = require('./src/routes/bank');
const routes_income = require('./src/routes/income');
const routes_outcome = require('./src/routes/outcome');
const routes_invalid_ = require('./src/routes/notFound');

app.use(cors({ origin: true }));
app.use(express.json());

app.use(routes_person);
app.use(routes_bank);
app.use(routes_income);
app.use(routes_outcome);
app.use(routes_invalid_);

oracle
  .start()
  .then(() => {
    console.log('Oracle database connected!');
    app.listen(server.port, () => {
      console.log(`Server running on port: ${server.port}`);
    });
  })
  .catch((error) => console.log(error));