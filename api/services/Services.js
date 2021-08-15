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

    async update (update, id, transaction={}) {
        return this.model.update(update, {
            where: {
                id: Number(id),
            },
        }, transaction);
    }

    async updates(update, where, transaction={}) {
        return this.model.update(update, {
            where: { ...where },
        }, transaction);
    }

    async delete (id) {

    }
}

module.exports = Services;