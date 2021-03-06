const database = require('../models');
const { Op } = require('sequelize');

class TurmaController {

    // CREATE

    static criaTurma = async (req, res) => {
        try {
            const novaTurma = req.body;
            const novaTurmaCriada = await database.turmas.create(novaTurma);
            return res.status(200).json(novaTurmaCriada);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    // READ

    static pegaTodasAsTurmas = async (req, res) => {
        const { data_inicial, data_final } = req.query;
        const where = {};

        (data_inicial || data_final) && (where.data_inicio = {});
        data_inicial && (where.data_inicio[Op.gte] = data_inicial);
        data_final && (where.data_inicio[Op.lte] = data_final);

        try {
            const todosAsTurmas = await database.turmas.findAll({ where });
            return res.status(200).json(todosAsTurmas);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    static pegaUmaTurma = async (req, res) => {
        try {
            const { id } = req.params;
            const turma = await database.turmas.findOne({
                where: {
                    id: Number(id),
                },
            });
            return res.status(200).json(turma);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    // UPDATE

    static atualizaTurma = async (req, res) => {
        try {
            const { id } = req.params;
            const novasInfos = req.body;
            await database.turmas.update(novasInfos, {
                where: {
                    id: Number(id),
                },
            });
            const TurmaAtualizada = await database.turmas.findOne({
                where: {
                    id: Number(id),
                },
            });
            return res.status(200).json(TurmaAtualizada);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    // DELETE

    static apagaTurma = async (req, res) => {
        try {
            const { id } = req.params;
            await database.turmas.destroy({
                where: {
                    id: Number(id),
                },
            });
            return res.status(204).end();
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    static restauraTurma = async (req, res) => {
        try {
            const { id } = req.params;
            await database.turmas.restore({
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

module.exports = TurmaController;