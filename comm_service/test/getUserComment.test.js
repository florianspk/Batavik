
const request  = require("supertest");
const app = require("../app.js");

describe('searches for the invalid basket of a user with his id', () => {

    it('valide test', async() => {
      const res = await request(app)
      .get("/api/comment/user/1")
      expect(res.statusCode).toEqual(200);
    })

    it('no valide test 1', async() => {
      const res = await request(app)
      .get("/api/comment/user/string")
      expect(res.statusCode).toEqual(400);
    })
  })
  