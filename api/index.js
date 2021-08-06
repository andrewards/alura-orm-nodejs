const express = require('express');
const app = express();

app.use(express.json());

const port = 3000;

app.get('/teste', (req, res) => {
    res.status(200).send({
        message: 'Boas-vindas à API!',
    });
});

app.listen(3000, () => console.log(`Servidor rodando na porta ${port}...`));

module.exports = app;