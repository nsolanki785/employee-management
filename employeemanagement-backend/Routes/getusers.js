const router = require('express').Router()
const jwt = require("jsonwebtoken");
const {userData }= require('../modal/userSchema');
const {verifyToken} = require('../utils/auth')

const secretkey = "bkdbsa4546sn";





router.post('/',async(req,res,next)=>{
    console.log("vcxvxcv");
    const barierToken = req;
    const roletype = req.body.role;

    console.log("roletype",roletype);
    // console.log("tttt",barierToken?.headers?.authorization)
    const isValid =  verifyToken(barierToken?.headers) 
    console.log('isValid',isValid);
      if (isValid) {
        console.log("valided"); 
        // const users =   await collection.find({});
        const alladmins = await userData.find({role:roletype},{
            "_id": 1,
            "email": 1,
            "firstName":1,
            "lastName":1
          })
    
          
        console.log("alladmins",alladmins);
       
        res.json(alladmins);
      }
      else {
        res.status(498).send({message:"Invalid Token"})
      }
  })

module.exports = router;