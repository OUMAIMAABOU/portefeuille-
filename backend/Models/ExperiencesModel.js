const mongoose = require('mongoose')
const experience = new mongoose.Schema({
name:String
})
module.exports=mongoose.model('experience',experience)