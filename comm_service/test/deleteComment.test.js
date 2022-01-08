
const request  = require("supertest");
const app = require("../app.js");
const axios = require('axios');
const FormData = require('form-data');

describe("search for a user's unvalidated basket, if it does not exist, create it, then create a product Card with the basket id, with the product id and with the quantity", () => {

/*
faire des vaeur de test 
    it('valide test', async() => {

      const res = await request(app)
      .delete("/api/comment/1")

      expect(res.statusCode).toEqual(200);
    })*/

    it('no valide test 1', async() => {


      const res = await request(app)
      .delete("/api/comment/string")

      expect(res.statusCode).toEqual(400);
    })


    it('no valide test 3', async() => {
    
      const res = await request(app)
      .delete("/api/comment/99999")

      expect(res.statusCode).toEqual(204);
    })
  })
  