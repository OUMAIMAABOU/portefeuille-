const supertest = require('supertest')
const app = require('../app');
describe('Experience', () => {
  it('Add Experience', async () => {
    const res = await supertest(app)
      .post('/api/auth/CreateExperience')
      .send({
        name: "Experience",
      })
    expect(res.statusCode).toEqual(200)
  })
  it('Delete Experience', async () => {
    const res = await supertest(app)
      .delete('/api/auth/deleteExperiences/63b1f04f028ba228eb945e02')
    expect(res.statusCode).toEqual(400)
  })
  it('Modifier Experience', async () => {
    const res = await supertest(app)
      .patch('/api/auth/modifierExperience/63b1f04f028ba228eb945e02')
      .send({
        name: "Experience update",
      })
    expect(res.statusCode).toEqual(400)
  })
  it('Get Experience', async () => {
    const res = await supertest(app)
      .get('/api/auth/selectExperiences')
    expect(res.statusCode).toEqual(400)
  })
})


  
