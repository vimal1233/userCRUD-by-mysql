const express=require('express');
const userController=require('../controller/user.controller');
const router=express.Router();

router.post('/create', userController.createUsre);
router.get('/getall', userController.readUser);
router.put('/update', userController.updateUser);
router.delete('/deleteuser', userController.deleteUser);

module.exports=router
