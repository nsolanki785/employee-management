const router = require('express').Router()
const jwt = require("jsonwebtoken");
const {userData }= require('../modal/userSchema');
const {verifyToken} = require('../utils/auth')

const secretkey = "bkdbsa4546sn";





router.delete('/:id',async(req,res,next)=>{
    console.log("vcxvxcv");     

    const userid = req.params.id;

    console.log("userid",userid);
    // console.log("tttt",barierToken?.headers?.authorization)
  
     const ddd = await userData.deleteOne({ _id: new Object(userid)});
      

 return res.status(200).send({message:"user delete succefully"})
    



  })

module.exports = router;