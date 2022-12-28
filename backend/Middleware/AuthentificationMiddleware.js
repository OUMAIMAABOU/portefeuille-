// const jwt=require('jsonwebtoken')
// const ls=require('local-storage')

// function verifyToken(access){
//     return (req,res,next)=>
//     {
//         try
//         {
//             if(ls('token'))
//             {
//             if(jwt.verify(ls('token'),process.env.ACCESS_TOKEN))
//             {
//                 req.user=jwt.verify(ls('token'),process.env.ACCESS_TOKEN)
//                 if(access.includes(req.user.payload.role)) next()
//                 else res.send("You Don’t Have Authorization to View this Page")
//             }
//             }else res.send('You Don’t Have Authorization to View this Page')
//         }catch(e) { return res.status(400).send({message:e})  }     
//     }
// }
// module.exports= {verifyToken}

