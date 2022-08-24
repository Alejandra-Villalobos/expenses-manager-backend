const express = require('express');
const app = express();
const { server } = require('./src/config/config');

const invalidRoutes = require('./src/routes/notFound');
const categoryRoutes = require('./src/routes/category');

app.use(express.json());

app.use(categoryRoutes);
app.use(invalidRoutes);

app.listen(server.port, () => {
    console.log(`Server running on port: ${server.port}`)
});