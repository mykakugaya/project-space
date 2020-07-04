module.exports = function(sequelize, DataTypes) {
    const Image = sequelize.define("Image", {
        nasa_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        src: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {

    freezeTableName: true
});

    Image.associate = function(models) {
        Image.belongsToMany(models.User, {
            through: "UserId",
            foreignKey: {
                allowNull: true
            }
        });
    };
    return Image;
}