const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { object } = require("joi");
const secretkey = "bkdbsa4546sn";

mongoose.connect("mongodb://127.0.0.1:27017/employeeManagement")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:true
    },
    lastName : {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role: {
       type:String,
       required:true
    },
    // name: {
    //     type:String,
    //     required:true
    // }
})

const validate = (data) => {
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    const error = {}


    if (!regex.test(data.email)) {
        error["email"] = "Invalid email"
    }

    if (!data.password.match(passwordRegex)) {
        error["password"] = "Invalid password"
    }
    return error
};


const userData = mongoose.model("UserData",userSchema);
module.exports= {userData,validate}