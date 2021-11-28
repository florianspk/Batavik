
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

        amoutProduct:{
            type: Sequelize.INTEGER(),
            allowNull:false
        }

        
    });

    return ProductCart;
};