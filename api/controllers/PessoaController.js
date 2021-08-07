const database = require('../models');

class PessoaController {

    static pegaTodasAsPessoas = async (req, res) => {
        try {
            const todasAsPessoas = await database.pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        } catch(err) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;