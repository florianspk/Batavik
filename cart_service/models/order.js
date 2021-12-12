
module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
        id:{
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },

        orderToken:{
            type: Sequelize.STRING(150),
            allowNull:false
        },

        orderPrice:{
            type: Sequelize.DECIMAL(10,2),
            allowNull:false
        },

        tradeInformation:{
            type: Sequelize.STRING(150),
            allowNull:false
        },

        deadLineOrder:{
            type: Sequelize.DATE,
            allowNull:false
        },
        
    });

    return Order;
};