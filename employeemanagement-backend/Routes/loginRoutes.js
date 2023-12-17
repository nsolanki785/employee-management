const router = require('express').Router()
const {userData,validate }= require('../modal/userSchema');
const bcrypt = require('bcrypt');
const {generateToken}  = require('../utils/auth')
const jwt = require("jsonwebtoken");
const secretkey = "bkdbsa4546sn";


router.post("/",async(req,res,next)=>{
    const  {email, password} =  req.body;
    console.log("signin")

    try {
        const  error  = validate(req.body);
        console.log("dscff")
       if (error.email || error.password) {
           return res.status(400).send({ message: error.email && error.password ? "Invalid Email or Password" : error.email ? error.email :error.password  });
       }

        const user =  await userData.findOne({email:email});
        if (user) {
            console.log("login",user)

            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );

           
            if (!validPassword) {
                return res.status(401).send({ message: "Wrong password." });
            } 

            if (validPassword) {
                const token = generateToken()
            // const token = await userData.generateAuthToken();
              console.log("token",token)
            return res.status(200).send({ token: token, message: "logged in successfully",userDetails : {
                email:user?.email,
                firstName:user?.firstName,
                lastName:user?.lastName,
                role:user?.role
            }});
            }
        }

        else {
            return res.status(401).send({ message: "Wrong email..." });
        }
    }
    
    catch(err) {
          res.json("fail")
    }    
})

module.exports = router;