module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("Comment", {
        id:{
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        
        text:{
            type: Sequelize.STRING(1000),
            allowNull:false
        },

        note:{
            type: Sequelize.INTEGER(10)
        },

        idProduct:{
            type: Sequelize.INTEGER(10),
            allowNull: false,
        },

        idUser:{
            type: Sequelize.INTEGER(10),
            allowNull: false,
        },
        
    });

    return Comment;
};