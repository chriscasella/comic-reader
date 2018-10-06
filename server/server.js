const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

const routes = require('./config/routes.js');

app.use('/', routes);

app.listen(port, () =>  console.log(`Listening on port ${port}`));