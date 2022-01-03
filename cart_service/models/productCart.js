
module.exports = (sequelize, Sequelize) => {
    const ProductCart = sequelize.define("productCart", {
        id:{
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },

        idProduct:{
            type: Sequelize.INTEGER(),
            allowNull:false
        },

        
        unitPrice:{
            type: Sequelize.DECIMAL(10,2),
            allowNull:true
        },

        quantity:{
            type: Sequelize.INTEGER(),
            allowNull:false
        }

        
    });

    return ProductCart;
};