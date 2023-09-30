const express = require("express")
const loginData = require("./models/logindata")
const registerData = require("./models/register")
const cors = require("cors")
const { useNavigate } = require("react-router-dom")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

require("./db/conn.js");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/loginData",async(req,res) =>{

   const{email,cfpassword} = req.body
   try{
      console.log("Reach")
     const checkemail = await loginData.findOne({email:email})
     const checkpass = await loginData.findOne({confirmpassword:cfpassword})
     if(checkemail && checkpass){

        res.json("credmatch")
     }
     else{
      
          res.json("crednotmatch")
     }

   }catch(error){
       res.json("notexiste")
       console.log("Reach at cred not match and error")
       console.log(`${error}`)

   }
})
app.post("/registerData",async(req,res) =>{

   const{email,phone,cfpassword,crpassword} = req.body

  const data = {
    email:email,
    confirmpassword : cfpassword,
    createpassword : crpassword,
    phone : phone,
   //  firstName : firstName,
   //  middleName : middleName,
   //  lastName : lastName,
   //  age : age,
   //  gender : gender,
   //  date : date,
   //  username : username
  }

   try{
     const check = await registerData.findOne({email:email})
     if(check){
      console.log("process started reach at exist");
      res.json("exist")
   }
   else{
        console.log("process started reach at not exist");
        res.json("notexist");
        await registerData.insertMany([data])
     }

   }catch(error){
      res.json("notexiste")
      console.log("Reach error")
      console.log(`${error}`)

  }
})
const port = 8080 ;
app.listen(port , ()=>{
    console.log(` Server is running port ${port}`)
})