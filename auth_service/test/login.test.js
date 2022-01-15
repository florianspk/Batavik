const request  = require("supertest");
const app = require("../app.js");
const axios = require('axios');
const {it} = require("@jest/globals");
const qs = require('qs');

describe("Try to login user", () => {



    it('valide test', async() => {

        //connexion
        const data = qs.stringify({
            'email': 'benoit57250@hotmail.fr',
            'password': 'test'
        });

        await request(app).post("/api/auth/login").send(data).expect(200)


    })

    it('test wrong email', async() => {

        //connexion
        const data = qs.stringify({
            'email': 'tata',
            'password': 'test'
        });

        await request(app).post("/api/auth/login").send(data).expect(401)


    })


})