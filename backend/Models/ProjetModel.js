const mongoose = require('mongoose')

const projet=mongoose.Schema({
     name:String,
     detail:String,
     lienRepos:String
})
module.exports=mongoose.model("projets",projet)