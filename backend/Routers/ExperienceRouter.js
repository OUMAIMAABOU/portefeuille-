const router = require('express').Router()
const Experience=require('../Controllers/ExperienceController')
module.exports=ExperienceRouter=>{
    router.post('/CreateExperience',Experience.CreateExperience)
    router.delete('/deleteExperiences/:id',Experience.deleteExperiences)
    router.put('/modifierExperience/:id',Experience.ModifierExperience)
    router.get('/selectExperiences',Experience.VoirExperience)

    ExperienceRouter.use('/api/auth/',router)
}