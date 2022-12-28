const router = require('express').Router()
const Competence=require('../Controllers/CompetenceController')
module.exports=CompetenceRouter=>{
    router.post('/CreateCompetence',Competence.CreateCompetence)
    router.delete('/deleteCompetences/:id',Competence.deleteCompetences)
    router.put('/modifierCompetence/:id',Competence.ModifierCompetence)
    router.get('/selectCompetences',Competence.VoirCompetence)

    CompetenceRouter.use('/api/auth/',router)
}