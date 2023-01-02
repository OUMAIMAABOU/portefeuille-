const supertest = require('supertest')
const app = require('../app');
describe('Projet', () => {
  it('Add add', async () => {
    const res = await supertest(app)
      .post('/api/auth/CreateProjet')
      .send({
        name: "projet",
        lienRepos: "https://react-redux.js.org/",
        detail:"Designed to work with React's component model. You define how to extract the values your component needs from Redux, and your component updates automatically as needed."
      })
    expect(res.statusCode).toEqual(200)
  })
  it('Delete Project', async () => {
    const res = await supertest(app)
      .delete('/api/auth/deleteProjets/63b1f04f028ba228eb945e02')
    expect(res.statusCode).toEqual(400)
  })
  it('Modifier Project', async () => {
    const res = await supertest(app)
      .patch('/api/auth/modifierProjet/63b1f04f028ba228eb945e02')
      .send({
        name: "projet",
        lienRepos: "https://react-redux.js.org/",
        detail:"Designed to work with React's component model. You define how to extract the values your component needs from Redux, and your component updates automatically as needed."
      })
    expect(res.statusCode).toEqual(400)
  })
  it('Get Project', async () => {
    const res = await supertest(app)
      .get('/api/auth/selectProjets')
    expect(res.statusCode).toEqual(400)
  })
})


  
