const express = require('express');
const Routes = require('./routes');

const app = express();
Routes(app);

const port = 3000;

app.listen(3000, () => {
    console.log(`Servidor rodando na porta ${port}...`)
});

module.exports = app;