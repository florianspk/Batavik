
const request  = require("supertest");
const app = require("../app.js");

describe("search for a user's unvalidated basket, if it does not exist, create it, then create a product Card with the basket id, with the product id and with the quantity", () => {

    it('valide test', async() => {
      const res = await request(app)
      .post("/api/cart")
      .send(
        {
          "idUser" : 1,
          "idProduct" : 56,
          "quantity" : 95
        }
      )
      expect(res.statusCode).toEqual(200);
    })

    it('no valide test 1', async() => {
      const res = await request(app)
      .post("/api/cart")
      .send(
        {
          "idUser" : 1,
          "quantity" : 95
        }
      )
      expect(res.statusCode).toEqual(400);
    })

    it('no valide test 1', async() => {
      const res = await request(app)
      .post("/api/cart")
      .send(
        {
          "idUser" : "string",
          "idProduct" : 56,
          "quantity" : 95
        }
      )
      expect(res.statusCode).toEqual(400);
    })

    it('no valide test 2', async() => {
      const res = await request(app)
      .post("/api/cart")
      expect(res.statusCode).toEqual(400);
    })
  })
  