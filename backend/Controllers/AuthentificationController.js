const Admin = require("../Models/AdminModel");
const bcryptjs = require("bcryptjs");
const localstorage=require('local-storage')
const jwt = require('jsonwebtoken')


// // method : post => url : api/auth/login =>acces : Public
exports.Login = async (req, res) => {
  try {
    const users = await Admin.findOne({ email: req.body.email });
    const payload={userId:users._id,username:users.name}

    if (users) {
      if (await bcryptjs.compare(req.body.password, users.password)) {
        localstorage('token', jwt.sign(payload,process.env.ACCESS_TOKEN,{expiresIn:"120m"}))
        res.status(200).json(users.name);
      } else res.send("password invalide");
    } else res.send("can't find user");
  } catch (e) {
    return res.status(400).send({ message: e });
  }
};

// // method : post => url : api/auth/Register =>acces : Public
exports.Register = async (req, res) => {
  const { body } = req;
  if (!body) throw new CatchError(`Remplir tous les champs`, 400);
  try {
    body.password = await bcryptjs.hash(body.password, 10);
    await Admin.create({ ...body });
    res.json("created");
  } catch (e) {
    return res.status(400).send(e);
  }
};
exports.VoirAdmin=async(_,res)=>{
  try{
    res.status(200).send( await Admin.find())
  }catch(e){
      return res.status(400).send({message:e})
  }
}