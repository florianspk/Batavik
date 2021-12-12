
module.exports = (sequelize, Sequelize) => {
    const Cart = sequelize.define("cart", {
        id:{
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },

        validation:{
            type: Sequelize.TINYINT(1),
            allowNull:false
        },

        cartPrice:{
            type: Sequelize.DECIMAL(10,2),
            allowNull:false
        },

        idUser:{
            type: Sequelize.INTEGER(10),
            allowNull:false
        },
    });

    return Cart;
};