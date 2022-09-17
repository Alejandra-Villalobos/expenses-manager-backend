const express = require('express');
const app = express();
const { server } = require('./src/config/config');

const invalidRoutes = require('./src/routes/notFound');
const bankRoutes = require('./src/routes/bank');

app.use(express.json());

app.use(bankRoutes);
app.use(invalidRoutes);

app.listen(server.port, () => {
    console.log(`Server running on port: ${server.port}`)
});