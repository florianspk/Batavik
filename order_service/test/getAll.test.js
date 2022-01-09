
const request  = require("supertest");
const app = require("../app.js");
const axios = require('axios');
const qs = require('qs');

describe('searches for the invalid basket of a user with his id', () => {

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
      .get("/api/order/all")
      .set('Authorization', 'Bearer ' + token)
      expect(res.statusCode).toEqual(200);
    })

  })
  