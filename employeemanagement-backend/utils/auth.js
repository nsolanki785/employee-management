// const Joi = require("joi")

// const validate = (data) => {
// 	const schema = Joi.object({
// 		email: Joi.string().email().required().label("Email"),
// 		password: passwordComplexity().required().label("Password"),
// 	});
// 	return schema.validate(data);
// };
const jwt = require("jsonwebtoken");
const secretkey = "bkdbsa4546sn";

 const generateToken  = () => {
  const token = 	jwt.sign({ _id: this._id }, secretkey, {
		expiresIn: "7d",
	});
	return token;
}


const verifyToken = (token) =>  {
	console.log("djos",typeof token?.authorization)
	let isValid = true
	const barierToken = token?.authorization
	// console.log("token",barierToken)
	if (typeof barierToken != undefined) {
	      jwt.verify(barierToken,secretkey,(error,authData)=>{
			if (error) {
				isValid = false;
			}			
		  })
	}
	else {
		isValid = false
	}
	return isValid
}

module.exports = {generateToken,verifyToken}

