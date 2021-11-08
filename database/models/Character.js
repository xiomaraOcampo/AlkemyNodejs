const Movie = require("./Movie");

module.exports=function(sequelize,dataTypes){
    let Character=sequelize.define('Character',{

        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },

        imageCharacter:{
            type:dataTypes.STRING(255)
        },

        name:{
            type:dataTypes.STRING(255)
        },

        age:{
            type:dataTypes.DECIMAL
        },
        
        weight:{
            type:dataTypes.DECIMAL
        },

        history:{
            type:dataTypes.STRING(255)
        }
    },{
        tableName:'characters',
        timeStamps:false
    });

    Character.associate = function (models) {
        

        Character.belongsToMany(models.Movie, {
            as: 'movies',
            through:'character_movie',
            foreignKey: 'character_id',
            otherKey:'movie_id',
            timestamps:false
        });
    }
     
    return Character;

}