
const request  = require("supertest");
const app = require("../app.js");

describe('searches for the invalid basket of a user with his id', () => {

    it('valide test', async() => {
      const res = await request(app)
      .post("/api/order/return/2")
      .send({
        idUser: 1
      })
      expect(res.statusCode).toEqual(200);
    })

    it('not valide test 1', async() => {
        const res = await request(app)
        .post("/api/order/return/2")
        .send({
            idUser: 99999
        })
        expect(res.statusCode).toEqual(204);
      })

    it('not valide test 2', async() => {
        const res = await request(app)
        .post("/api/order/return/1")
        .send({
            idUser: "string"
        })
        expect(res.statusCode).toEqual(204);
      })

  })
  