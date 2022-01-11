
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
      .post("/api/order/cancel/1")
      .set('Authorization', 'Bearer ' + token)
      .send({
        idUser: 2
      })
      expect(res.statusCode).toEqual(200);
    })

    it('not valide test 1', async() => {
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
        .post("/api/order/cancel/2")
        .set('Authorization', 'Bearer ' + token)
        .send({
            idUser: 99999
        })
        expect(res.statusCode).toEqual(204);
      })

    it('not valide test 2', async() => {
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
        .post("/api/order/cancel/1")
        .set('Authorization', 'Bearer ' + token)
        .send({
            idUser: "string"
        })
        expect(res.statusCode).toEqual(400);
      })

    it('not valide test 2', async() => {
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
        .post("/api/order/cancel/1")
        .set('Authorization', 'Bearer ' + token)
        expect(res.statusCode).toEqual(400);
      })

  })
  