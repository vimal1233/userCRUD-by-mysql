
exports.defineUser=(dbConnection, DataTypes)=>{
    const User=dbConnection.define('users',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        firstName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        lastName:{
            type:DataTypes.STRING,
        },
        email:{
            type:DataTypes.STRING,
            unique:true,
            allowNull:false
        },
    });
    return User
}

