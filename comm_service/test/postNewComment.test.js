
const request  = require("supertest");
const app = require("../app.js");
const axios = require('axios');
const qs = require('qs');

describe("search for a user's unvalidated basket, if it does not exist, create it, then create a product Card with the basket id, with the product id and with the quantity", () => {


    it('valide test', async() => {
      //connexion
      var data = qs.stringify({
      'email': 'benoit57250@hotmail.fr',
      'password': 'test' 
      });
      
      var config = {
        method: 'post',
        url: 'http://localhost:3010/api/auth/login',
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
          "rate" : 5 ,
          "idProduct" : 1 
        }
      )
      //console.log(connexion());
      expect(res.statusCode).toEqual(200);
    })

    it('no valide test 1', async() => {
      //connexion
      var data = qs.stringify({
        'email': 'benoit57250@hotmail.fr',
        'password': 'test' 
        });
        
        var config = {
          method: 'post',
          url: 'http://localhost:3010/api/auth/login',
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
          "rate" : 5 ,
          "idProduct" : 1 
        }
      )
      expect(res.statusCode).toEqual(400);
    })

    it('no valide test 2', async() => {
      //connexion
      var data = qs.stringify({
        'email': 'benoit57250@hotmail.fr',
        'password': 'test' 
        });
        
        var config = {
          method: 'post',
          url: 'http://localhost:3010/api/auth/login',
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
          "rate" : 5 ,
          "idProduct" : "string" 
        }
      )
      expect(res.statusCode).toEqual(400);
    })

    it('no valide test 3', async() => {
      //connexion
      var data = qs.stringify({
      'email': 'benoit57250@hotmail.fr',
      'password': 'test' 
      });
      
      var config = {
        method: 'post',
        url: 'http://localhost:3010/api/auth/login',
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
  