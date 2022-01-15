const request = require("supertest");
const app = require("../app.js");
const axios = require('axios');
const {it} = require("@jest/globals");
const qs = require('qs');

describe("Try if a token is valid", () => {


    it('valide test', async() => {

        //connexion
        const data = qs.stringify({
            'email': 'benoit57250@hotmail.fr',
            'password': 'test'
        });

        const config = {
            method: 'post',
            url: 'http://localhost:3010/api/auth/login',
            data: data
        };
        let token;
        await axios(config)
            .then(function (response) {
                token = response.data.token;
            })
        //connexion

        const res = await request(app)
            .get("/api/auth/validateToken")
            .set('Authorization', 'Bearer ' + token)

        expect(res.statusCode).toEqual(200);
    })

    it('valide test', async() => {
        let token = ""

        const res = await request(app)
            .get("/api/auth/validateToken")
            .set('Authorization', 'Bearer ' + token)

        expect(res.statusCode).toEqual(401);
    })




})