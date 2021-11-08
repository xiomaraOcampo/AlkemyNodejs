module.exports=function(sequelize,dataTypes){
    let User=sequelize.define('User',{

        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },

        name:{
            type:dataTypes.STRING(255)
        },

        mail:{
            type:dataTypes.STRING(255)
        },

        password:{
            type:dataTypes.DECIMAL
        }

    },{
        tableName:'users',
        timeStamps:false
    });

    
     
    return User;

}