module.exports = (sequelize, DataTypes) => {
  
    const Product = sequelize.define(
      "Product",
      {
        code: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        value: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      { timestamps: false }
    );
  
    return Product;
  };
  