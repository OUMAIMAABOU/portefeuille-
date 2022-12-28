const Competence = require("../Models/CompetenceModel");


// // method : post => url : api/auth/CreateCompetence =>acces : private
exports.CreateCompetence=async(req,res)=>{
    try{
     const {body}=req
   if(await Competence.create({...body})) res.status(200).send("created")
    }catch(e){
     return res.status(400).send({ message: e });
    }
 }
 // // method : delete => url : api/auth/deleteCompetences/id =>acces : private
 exports.deleteCompetences=async(req,res)=>{
    try{
    
      if(await Competence.deleteOne({_id:req.params.id})) res.status(200).send("delete")
    }catch(e){
        return res.status(400).send({message:e})
    }
 }

  // // method : delete => url : api/auth/deleteCompetences/id =>acces : private

 exports.ModifierCompetence=async(req,res)=>{
    try{
      console.log(req.params.id)
      if(await Competence.updateOne({_id:req.params.id},{name:req.body.name})) res.status(200).send("update")
    }catch(e){
        return res.status(400).send({message:e})
    }
 }

 // // method : get => url : api/auth/selectCompetences =>acces : private
 exports.VoirCompetence=async(_,res)=>{
    try{
      res.status(200).send( await Competence.find())
    }catch(e){
        return res.status(400).send({message:e})
    }
 }