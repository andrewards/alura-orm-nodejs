const database = require('../models');

class Services {

    constructor(model) {
        this.model = model;
    }

    async read () {
        return database[this.model].findAll();
    }
}

module.exports = Services;