"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define(
    "materia",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      semestre: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      fk_profesor: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "profesores",
          key: "id",
        },
      },
      fk_carrera: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "carreras",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
      tableName: "materias",
    }
  );

  materia.getmateriaes = async (params) => {
    
    const query = ``;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  materia.associate = function (models) {
    // materia.hasMany(models.materias, {
    //   foreignKey: "fk_materia",
    //   as: "materias",
    // });
  };

  return materia;
};

