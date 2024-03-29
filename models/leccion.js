"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const leccion = sequelize.define(
    "leccion",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fk_seccion: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "secciones",
          key: "id",
        },
      },
      titulo: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      url: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
      tableName: "lecciones",
    }
  );

  leccion.getleccions = async (params) => {
    
    const query = ``;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  leccion.associate = function (models) {
    // leccion.hasMany(models.materias, {
    //   foreignKey: "fk_materia",
    //   as: "materias",
    // });
  };

  return leccion;
};
