
const request  = require("supertest");
const app = require("../app.js");
const axios = require('axios');
const qs = require('qs');

describe("Change the quantity of a product in product cart if the quantity is => 0 we delete the line of the product cart", () => {
/*
    it('valide test', async() => {
      //connexion
      var data = qs.stringify({
        'email': 'test4',
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
      .post("/api/cart/quantityProduct")
      .set('Authorization', 'Bearer ' + token)
      .send(
        {
          "idUser" : 1,
          "idProduct" : 56,
          "quantity" : 95
        }
      )
      expect(res.statusCode).toEqual(200);
    })*/
/*
    it('valide test', async() => {
      //connexion
      var data = qs.stringify({
        'email': 'test4',
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
      .post("/api/cart/quantityProduct")
      .set('Authorization', 'Bearer ' + token)
      .send(
        {
          "idUser" : 1,
          "idProduct" : 56,
          "quantity" : 0
        }
      )
      expect(res.statusCode).toEqual(200);
    })*/

    it('no valide test 1', async() => {
      //connexion
      var data = qs.stringify({
        'email': 'test4',
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
      .post("/api/cart/quantityProduct")
      .set('Authorization', 'Bearer ' + token)
      .send(
        {
          "idUser" : 1,
          "quantity" : 95
        }
      )
      expect(res.statusCode).toEqual(400);
    })

    it('no valide test 1', async() => {
      //connexion
      var data = qs.stringify({
        'email': 'test4',
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
      .post("/api/cart/quantityProduct")
      .set('Authorization', 'Bearer ' + token)
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
      //connexion
      var data = qs.stringify({
        'email': 'test4',
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
      .post("/api/cart/quantityProduct")
      .set('Authorization', 'Bearer ' + token)
      expect(res.statusCode).toEqual(400);
    })
  })
  