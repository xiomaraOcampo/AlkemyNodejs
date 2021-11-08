module.exports = (sequelize,dataTypes) => {
    let alias = "Character_Movie";

    let cols = {
        id: {
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        movie_id: {
            type:dataTypes.INTEGER
        },
        character_id: {
            type:dataTypes.INTEGER
        }
    };

    let config = {
        tableName:"character_movie",
        timestamps:false
    };

    const Character_Movie = sequelize.define(alias, cols, config);

    Character_Movie.associate = function(models){
        Character_Movie.belongsTo(models.Character,{
            as:"characters",
            foreignKey:"character_id"
        })
    }

    Character_Movie.associate = function(models){
        Character_Movie.belongsTo(models.Movie,{
            as:"movies",
            foreignKey:"movie_id"
        })
    }

    return Character_Movie;
}