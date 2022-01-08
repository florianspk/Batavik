
const request  = require("supertest");
const app = require("../app.js");
const axios = require('axios');
const FormData = require('form-data');

describe("search for a user's unvalidated basket, if it does not exist, create it, then create a product Card with the basket id, with the product id and with the quantity", () => {


    it('valide test', async() => {
      //connexion
      var data = new FormData();
      data.append('email', 'soria.cao@hotmail.com');
      data.append('password', 'azerty');
      
      var config = {
        method: 'post',
        url: 'http://localhost:3010/api/auth/login',
        headers: { 
          ...data.getHeaders()
        },
        data : data
      };
      
      await axios(config)
      .then(function (response) {
        token = response.data.token;
      })
      //connexion

      const res = await request(app)
      .post("/api/comment")
      .set('Authorization', 'Bearer ' + token)
      .send(
        {
          "text" : "string",
          "note" : 5 ,
          "idProduct" : 1 
        }
      )
      //console.log(connexion());
      expect(res.statusCode).toEqual(200);
    })

    it('no valide test 1', async() => {
      //connexion
      var data = new FormData();
      data.append('email', 'soria.cao@hotmail.com');
      data.append('password', 'azerty');
      
      var config = {
        method: 'post',
        url: 'http://localhost:3010/api/auth/login',
        headers: { 
          ...data.getHeaders()
        },
        data : data
      };
      
      await axios(config)
      .then(function (response) {
        token = response.data.token;
      })
      //connexion

      const res = await request(app)
      .post("/api/comment")
      .set('Authorization', 'Bearer ' + token)
      .send(
        {
          "note" : 5 ,
          "idProduct" : 1 
        }
      )
      expect(res.statusCode).toEqual(400);
    })

    it('no valide test 2', async() => {
      //connexion
      var data = new FormData();
      data.append('email', 'soria.cao@hotmail.com');
      data.append('password', 'azerty');
      
      var config = {
        method: 'post',
        url: 'http://localhost:3010/api/auth/login',
        headers: { 
          ...data.getHeaders()
        },
        data : data
      };
      
      await axios(config)
      .then(function (response) {
        token = response.data.token;
      })
      //connexion

      const res = await request(app)
      .post("/api/comment")
      .set('Authorization', 'Bearer ' + token)
      .send(
        {
          "text" : "string",
          "note" : 5 ,
          "idProduct" : "string" 
        }
      )
      expect(res.statusCode).toEqual(400);
    })

    it('no valide test 3', async() => {
      //connexion
      var data = new FormData();
      data.append('email', 'soria.cao@hotmail.com');
      data.append('password', 'azerty');
      
      var config = {
        method: 'post',
        url: 'http://localhost:3010/api/auth/login',
        headers: { 
          ...data.getHeaders()
        },
        data : data
      };
      
      await axios(config)
      .then(function (response) {
        token = response.data.token;
      })
      //connexion

      const res = await request(app)
      .post("/api/comment")
      .set('Authorization', 'Bearer ' + token)
      expect(res.statusCode).toEqual(400);
    })
  })
  