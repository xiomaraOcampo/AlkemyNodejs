module.exports=function(sequelize,dataTypes){
    
    let Genre=sequelize.define('Genre',{
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },

        name:{
            type:dataTypes.STRING
        },
        imageGenre:{
            type:dataTypes.STRING(255)
        },

        movie_id:{
            type:dataTypes.INTEGER

        }
        
    },{

        tableName:'genres',
        timeStamps:false
    });

    Genre.associate = function (models) {
        Genre.hasMany(models.Movie, {
            as: 'movies',
            foreignKey: 'genre_id'
        })
    }
    


    return Genre;



}