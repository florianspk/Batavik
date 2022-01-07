
const request  = require("supertest");
const app = require("../app.js");

describe('searches for the invalid basket of a user with his id', () => {

    it('valide test', async() => {
      const res = await request(app)
      .post("/api/order/validate")
      .send({
        "idUser" : 3,
        "tradeInformation" : "balabla",
        "productList" : [
            {
                "id": 55,
                "price" : 12.99
            },
            {
                "id": 56,
                "price" : 10.99
            }
        ]
      })
      expect(res.statusCode).toEqual(200);
    })

    it('not valide test 1', async() => {
        const res = await request(app)
        .post("/api/order/validate")
        .send({
            "tradeInformation" : "balabla",
            "productList" : [
                {
                    "id": 55,
                    "price" : 12.99
                },
                {
                    "id": 56,
                    "price" : 10.99
                }
            ]
        })
        expect(res.statusCode).toEqual(400);
      })

    it('not valide test 2', async() => {
        const res = await request(app)
        .post("/api/order/validate")
        .send({
            "idUser" : "string",
            "tradeInformation" : "balabla",
            "productList" : [
                {
                    "id": 55,
                    "price" : 12.99
                },
                {
                    "id": 56,
                    "price" : 10.99
                }
            ]
        })
        expect(res.statusCode).toEqual(400);
      })

  })
  