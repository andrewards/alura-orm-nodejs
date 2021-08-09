const database = require('../models');

class PessoaController {

    // CREATE

    static criaPessoa = async (req, res) => {
        try {
            const novaPessoa = req.body;
            const novaPessoaCriada = await database.pessoas.create(novaPessoa);
            return res.status(200).json(novaPessoaCriada);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    // READ

    static pegaTodasAsPessoas = async (req, res) => {
        try {
            const todasAsPessoas = await database.pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    static pegaUmaPessoa = async (req, res) => {
        try {
            const { id } = req.params;
            const pessoa = await database.pessoas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(pessoa);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }
}

module.exports = PessoaController;