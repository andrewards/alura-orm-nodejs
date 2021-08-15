const Services = require('./Services');

class PessoasServices extends Services {

    constructor() {
        super('pessoas');
        this.matriculas = new Services('matriculas');
    }

    // métodos específicos do controlador de pessoas

    async pegaAtivas (where={}) {
        return this.model.findAll({ where: { ...where } });
    }

    async pegaTodosOsRegistros (where={}) {
        return this.model.scope('all').findAll({ where: { ...where } });
    }

    async cancelaPessoaEMatriculas (estudanteId, transaction) {
        await super.update({ ativo: false }, estudanteId, { transaction });
        await this.matriculas.updates({ status: 'cancelado' }, {
            estudante_id: Number(estudanteId)
        }, { transaction });

        return;
    }


}

module.exports = PessoasServices;