const express = require('express');
const pessoas = require('./pessoas');
const niveis = require('./niveis');
const turmas = require('./turmas');

module.exports = app => {
    app.use(
        express.json(),
        pessoas,
        niveis,
        turmas
    );
};