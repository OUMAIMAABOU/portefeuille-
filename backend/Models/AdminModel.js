const mongoose = require("mongoose");
// create table user

const Admin = new mongoose.Schema(
{
  name:{
    type: String,
    required: true
  }, 
  email:{
    type: String,
    required: true
  },
  password:String,
  image:String,
  phoneNumber:String,
  adress:String,
  Introduction:String,
  metier:String,
  role:String

},{timestamps:true})

 module.exports= mongoose.model("admin", Admin);



