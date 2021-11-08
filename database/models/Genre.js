module.exports=function(sequelize,dataTypes){
    
    let Genre=sequelize.define('Genre',{
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },

        name:{
            type:dataTypes.STRING
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