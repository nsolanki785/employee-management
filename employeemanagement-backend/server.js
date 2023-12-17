const express = require('express');
// const {collection,productData} = require('./modal/mongo');
const cors = require('cors');
const app = express();
const signupRoute =  require('./Routes/signupRoutes');
const loginRoute =  require('./Routes/loginRoutes');
const getUsers = require('./Routes/getusers');
const deleteUser = require('./Routes/deleteuser')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.use("/signin",loginRoute)
app.use("/signup",signupRoute)
app.use("/getusers",getUsers)
app.use("/deleteuser",deleteUser)
// app.use("/getmanagers",getManagers)

// app.use("")
app.listen(9000, ()=>{
    console.log("Connected");
})

