const Experience = require("../Models/ExperiencesModel");


// // method : post => url : api/auth/CreateExperience =>acces : private
exports.CreateExperience=async(req,res)=>{
    try{
     const {body}=req
   if(await Experience.create({...body})) res.status(200).send("created")
    }catch(e){
     return res.status(400).send({ message: e });
    }
 }
 // // method : delete => url : api/auth/deleteExperiences/id =>acces : private
 exports.deleteExperiences=async(req,res)=>{
    try{
    
      if(await Experience.deleteOne({_id:req.params.id})) res.status(200).send("delete")
    }catch(e){
        return res.status(400).send({message:e})
    }
 }

  // // method : delete => url : api/auth/deleteExperiences/id =>acces : private

 exports.ModifierExperience=async(req,res)=>{
    try{
      console.log(req.params.id)
      if(await Experience.updateOne({_id:req.params.id},{name:req.body.name})) res.status(200).send("update")
    }catch(e){
        return res.status(400).send({message:e})
    }
 }

 // // method : get => url : api/auth/selectExperiences =>acces : public
 exports.VoirExperience=async(_,res)=>{
    try{
      res.status(200).send( await Experience.find())
    }catch(e){
        return res.status(400).send({message:e})
    }
 }