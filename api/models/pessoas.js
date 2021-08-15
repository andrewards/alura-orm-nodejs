'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pessoas.hasMany(models.turmas, {
        foreignKey: 'docente_id',
      });
      pessoas.hasMany(models.matriculas, {
        foreignKey: 'estudante_id',
      });
    }
  };
  pessoas.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: (dado) => {
          if (dado.length < 3) throw new Error('Nome inválido');
        }
      },
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'E-mail inválido',
        },
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    defaultScope: {
      where: {
        ativo: true,
      },
    },
    scopes: {
      all: {
        where: {
        },
      },
    },
    modelName: 'pessoas',
  });
  return pessoas;
};