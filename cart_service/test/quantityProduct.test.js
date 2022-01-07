
const request  = require("supertest");
const app = require("../app.js");

describe("Change the quantity of a product in product cart if the quantity is => 0 we delete the line of the product cart", () => {

    it('valide test', async() => {
      const res = await request(app)
      .post("/api/cart/quantityProduct")
      .send(
        {
          "idUser" : 1,
          "idProduct" : 56,
          "quantity" : 95
        }
      )
      expect(res.statusCode).toEqual(200);
    })

    it('valide test', async() => {
      const res = await request(app)
      .post("/api/cart/quantityProduct")
      .send(
        {
          "idUser" : 1,
          "idProduct" : 56,
          "quantity" : 0
        }
      )
      expect(res.statusCode).toEqual(200);
    })

    it('no valide test 1', async() => {
      const res = await request(app)
      .post("/api/cart/quantityProduct")
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
      .post("/api/cart/quantityProduct")
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
      .post("/api/cart/quantityProduct")
      expect(res.statusCode).toEqual(400);
    })
  })
  