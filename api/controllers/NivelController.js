// const database = require('../models');
const { NiveisServices } = require('../services');
const niveis = new NiveisServices();

class NivelController {

    // CREATE

    static criaNivel = async (req, res) => {
        try {
            const novoNivel = req.body;
            const novoNivelCriado = await database.niveis.create(novoNivel);
            return res.status(200).json(novoNivelCriado);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    // READ

    static pegaTodosOsNiveis = async (req, res) => {
        try {
            const todosOsNiveis = await niveis.read();
            return res.status(200).json(todosOsNiveis);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    static pegaUmNivel = async (req, res) => {
        try {
            const { id } = req.params;
            const nivel = await database.niveis.findOne({
                where: {
                    id: Number(id),
                },
            });
            return res.status(200).json(nivel);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    // UPDATE

    static atualizaNivel = async (req, res) => {
        try {
            const { id } = req.params;
            const novasInfos = req.body;
            await database.niveis.update(novasInfos, {
                where: {
                    id: Number(id),
                },
            });
            const NivelAtualizado = await database.niveis.findOne({
                where: {
                    id: Number(id),
                },
            });
            return res.status(200).json(NivelAtualizado);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    // DELETE

    static apagaNivel = async (req, res) => {
        try {
            const { id } = req.params;
            await database.niveis.destroy({
                where: {
                    id: Number(id),
                },
            });
            return res.status(204).end();
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    static restauraNivel = async (req, res) => {
        try {
            const { id } = req.params;
            await database.niveis.restore({
                where: {
                    id: Number(id),
                },
            });
            return res.status(204).end();
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }
}

module.exports = NivelController;