const supertest = require('supertest')
const app = require('../app');
describe('Competences', () => {
  it('Add ', async () => {
    const res = await supertest(app)
      .post('/api/auth/CreateCompetence')
      .send({
        name: "Competences",
      })
    expect(res.statusCode).toEqual(200)
  })
  it('Delete Competences', async () => {
    const res = await supertest(app)
      .delete('/api/auth/deleteCompetences/63b1f04f028ba228eb945e02')
    expect(res.statusCode).toEqual(400)
  })
  it('Modifier Competences', async () => {
    const res = await supertest(app)
      .patch('/api/auth/modifierCompetence/63b1f04f028ba228eb945e02')
      .send({
        name: "Competencesupdate",
      })
    expect(res.statusCode).toEqual(400)
  })
  it('Get Competences', async () => {
    const res = await supertest(app)
      .get('/api/auth/selectCompetences')
    expect(res.statusCode).toEqual(400)
  })
})


  
