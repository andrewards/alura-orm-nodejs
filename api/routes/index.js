const express = require('express');
const pessoas = require('./pessoas');

module.exports = app => {
    app.use(express.json());
    app.use(pessoas);
};