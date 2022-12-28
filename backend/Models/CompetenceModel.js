const mongoose = require('mongoose')
const competence = new mongoose.Schema({
  name:String
})
module.exports=mongoose.model("competences",competence)