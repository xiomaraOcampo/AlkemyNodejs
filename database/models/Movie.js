module.exports=function(sequelize,dataTypes){
    let Movie= sequelize.define('Movie',{

        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },

        imageMovie:{
            type:dataTypes.STRING(255)
        },

        title:{
            type:dataTypes.STRING(255)

        },

        genre_id:{

            type:dataTypes.INTEGER

        },

        release_date:{
            type:dataTypes.DATE
        },

        score:{
            type:dataTypes.DECIMAL(5)
        }
    },{
        tableName:'movies',
        timeStamps:false
    });

    Movie.associate = function (models) {
        Movie.belongsTo(models.Genre, {
            as: 'genres',
            foreignKey: 'genre_id'
        });

        Movie.belongsToMany(models.Character, {
            as: 'characters',
            through:'character_movie',
            foreignKey: 'movie_id'
        });
    }



return Movie;
}