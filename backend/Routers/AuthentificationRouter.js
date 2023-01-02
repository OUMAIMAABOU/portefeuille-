const router = require("express").Router();
const Authentification = require("../Controllers/AuthentificationController.js");
module.exports = app =>
{    
  router.post('/register',Authentification.Register)
  router.post('/login',Authentification.Login)
  router.get('/user',Authentification.VoirAdmin)
  app.use('/api/auth/', router);
};