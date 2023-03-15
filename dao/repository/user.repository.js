const { defineUser }= require('../models/user.model')
const dbConnection= require('./dbConnection')

const User= defineUser(dbConnection.connection, dbConnection.DataType);
const createUserTable= async(forceCreation)=>{
    await User.sync({force: forceCreation});
}
const createUser= async (user)=>{
    const userData =await User.create({
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
    });
    return userData
}

const readUser=async()=>{
    const user= await User.findAll()
    return user
}
const updateUser=async(id)=>{
    const user= await User.findByPk(id)
    return user
}

const deleteUser=async(id)=>{
    const user= await User.destroy({where:{id:id}})
    return user
}


module.exports={
    createUserTable:createUserTable,
    createUser:createUser,
    readUser:readUser,
    updateUser:updateUser,
    deleteUser:deleteUser
}
