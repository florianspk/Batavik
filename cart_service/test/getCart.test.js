
const request  = require("supertest");
const app = require("../app.js");
const axios = require('axios');
const qs = require('qs');

describe('searches for the invalid basket of a user with his id', () => {

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
      .get("/api/cart/8")
      .set('Authorization', 'Bearer ' + token)
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
      .get("/api/cart/qsdqsdqds")
      .set('Authorization', 'Bearer ' + token)
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
      .get("/api/cart/1552452")
      .set('Authorization', 'Bearer ' + token)
      expect(res.statusCode).toEqual(204);
    })
  })
  