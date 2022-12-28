
const mongoose=require('mongoose')

mongoose.connect(process.env.MONG_URL,
{ 
  useNewUrlParser: true 
})
.then(reresults=>console.log('connection succ'))
.catch((err=> console.log(err)))  