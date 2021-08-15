const Services = require('./Services');

class PessoasServices extends Services {

    constructor() {
        super('pessoas');
    }

    // métodos específicos do controlador de pessoas

    async pegaAtivas (where={}) {
        return this.model.findAll({ where: { ...where } });
    }

    async pegaTodosOsRegistros (where={}) {
        return this.model.scope('all').findAll({ where: { ...where } });
    }
}

module.exports = PessoasServices;