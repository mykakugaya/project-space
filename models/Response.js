module.exports = function (sequelize, DataTypes) {

    const Response = sequelize.define("Response", {
        body: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    },
    {
        freezeTableName: true
    });

    Response.associate = function(models) {
        Response.belongsTo(models.Post, {
            through: "PostId",
            foreignKey: {
                allowNull: false
            }
        });
        Response.belongsTo(models.User, {
            through: "UserId",
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Response
};