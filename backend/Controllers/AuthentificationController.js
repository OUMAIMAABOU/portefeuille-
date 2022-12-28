// const CatchError = require('../Utils/CatchError')
const Admin = require("../Models/AdminModel");
const ProjetModel = require("../Models/ProjetModel");
const bcryptjs = require("bcryptjs");
const verificationemail = require("../Utils/Email.Utils");

// // method : post => url : api/auth/login =>acces : Public
exports.Login = async (req, res) => {
  try {
    const users = await Admin.findOne({ email: req.body.email });
    if (users) {
      if (await bcryptjs.compare(req.body.password, users.password)) {
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
