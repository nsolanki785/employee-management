const router = require('express').Router()
const {userData,validate }= require('../modal/userSchema.js');
// const validation = require('../utils/validation')
const bcrypt = require("bcrypt");
const Joi = require("joi")





router.post("/",async(req,res,next)=>{
    const  {email, password} =  req.body;
	console.log("body",req.body)
    // const data = {
    //     email:email,
    //     password:password
    // }
    try {
         const  error  = validate(req.body);
         console.log("dscff")
		if (error.email || error.password)
			return res.status(400).send({ message: error });

		const user =  await userData.findOne({email:email});
		if (user)
			return res
				.status(400)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await userData({ ...req.body, password: hashPassword }).save();
		res.status(200).send({ message: "User created successfully" });
	}
	
    catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
})

module.exports = router;