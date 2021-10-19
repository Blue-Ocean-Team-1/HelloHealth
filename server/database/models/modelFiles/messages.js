const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => (
  sequelize.define(
    'Messages',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      response_status: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      'default?': {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      tableName: 'messages',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'example_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    },
  )
);
