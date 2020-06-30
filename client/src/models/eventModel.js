module.exports = function(sequelize, DataTypes) {
    let Events = sequelize.define("Event", {
        eventName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
 
        freezeTableName: true
    });
    return Events;
}