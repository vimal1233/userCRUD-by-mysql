const userRepository= require('../dao/repository/user.repository');

exports.createUsre= async(req,res)=>{
    const body=req.body
    
    try {
        const user= await userRepository.createUser(body)
        return res.status(201).send(user)
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:"server error!"
        })
    }
}
exports.readUser= async(req,res)=>{
    try {
        const user= await userRepository.readUser()
        return res.status(200).send(user)
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:"server error!"
        })
    }
}
exports.updateUser= async(req,res)=>{
    const body=req.body
    const id=body.id
    try {
        const user= await userRepository.updateUser(id)
        if(!user){
            return res.status(404).send({
                message:'user is not found'
            })
        }
        if(body.firstName){
            user.firstName=body.firstName
        }
        if(body.lastName){
            user.lastName=body.lastName
        }
        if(body.email){
            user.email=body.email
        }
        await user.save()
        return res.status(200).send({
            message:'successfull update'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:"server error!"
        })
    }
}

exports.deleteUser= async(req,res)=>{
    const body=req.body
    const id=body.id
    try {
        const user= await userRepository.deleteUser(id)
        return res.status(200).send({
            message:'successfull delete'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:"server error!"
        })
    }
}