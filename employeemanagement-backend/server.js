const express = require('express');
// const {collection,productData} = require('./modal/mongo');
const cors = require('cors');
const app = express();
const signupRoute =  require('./Routes/signupRoutes');
const loginRoute =  require('./Routes/loginRoutes');
const getAdmins = require('./Routes/getadmins')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.use("/signin",loginRoute)
app.use("/signup",signupRoute)
app.use("/getadmins",getAdmins)
app.listen(9000, ()=>{
    console.log("Connected");
})

