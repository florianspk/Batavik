
const request  = require("supertest");
const app = require("../app.js");
const axios = require('axios');
const qs = require('qs');

describe('searches for the invalid basket of a user with his id', () => {
/*
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
    })*/

    it('not valide test 1', async() => {
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
        .post("/api/order/validate")
        .set('Authorization', 'Bearer ' + token)
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
        .post("/api/order/validate")
        .set('Authorization', 'Bearer ' + token)
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
  