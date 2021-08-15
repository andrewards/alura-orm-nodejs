const database = require('../models');

class Services {

    constructor(model) {
        this.model = database[model];
    }

    async create (data) {

    }

    async read () {
        return this.model.findAll();
    }

    async readOne (id) {

    }

    async update (update, id) {

    }

    async delete (id) {

    }
}

module.exports = Services;