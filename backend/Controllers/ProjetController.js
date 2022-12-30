const Projet = require("../Models/ProjetModel");


// // method : post => url : api/auth/CreateProjet =>acces : private
exports.CreateProjet=async(req,res)=>{
    try{
     const {body}=req
   if(await Projet.create({...body})) res.status(200).send("created")
    }catch(e){
     return res.status(400).send({ message: e });
    }
 }
 // // method : delete => url : api/auth/deleteProjets/id =>acces : private
 exports.deleteProjets=async(req,res)=>{
    try{
    
      if(await Projet.deleteOne({_id:req.params.id})) res.status(200).send("delete")
    }catch(e){
        return res.status(400).send({message:e})
    }
 }

  // // method : delete => url : api/auth/deleteProjets/id =>acces : private

 exports.ModifierProjet=async(req,res)=>{
    try{
      console.log(req.params.id)
      if(await Projet.updateOne({_id:req.params.id},{name:req.body.name})) res.status(200).send("update")
    }catch(e){
        return res.status(400).send({message:e})
    }
 }

 // // method : get => url : api/auth/selectProjets =>acces : public
 exports.VoirProjet=async(_,res)=>{
    try{
      res.status(200).send( await Projet.find())
    }catch(e){
        return res.status(400).send({message:e})
    }
 }