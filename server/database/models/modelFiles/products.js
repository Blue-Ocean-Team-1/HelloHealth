const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => (
  sequelize.define(
    'Products',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      product_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      product_cost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_inventory: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      product_rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      farm_id: {
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
      tableName: 'Products',
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
