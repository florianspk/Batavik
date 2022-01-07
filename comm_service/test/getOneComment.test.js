
const request  = require("supertest");
const app = require("../app.js");

describe('searches for the invalid basket of a user with his id', () => {

    it('valide test', async() => {
      const res = await request(app)
      .get("/api/comment/1")
      expect(res.statusCode).toEqual(200);
    })

    it('no valide test 1', async() => {
      const res = await request(app)
      .get("/api/comment/sting")
      expect(res.statusCode).toEqual(400);
    })

    it('no valide test 2', async() => {
      const res = await request(app)
      .get("/api/comment/999999")
      expect(res.statusCode).toEqual(204);
    })
  })
  