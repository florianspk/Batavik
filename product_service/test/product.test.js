const request  = require("supertest");
const app = require("../app.js");
const axios = require('axios');
const qs = require('qs');

describe('List products', () => {

    it('valid test', async() => {
        //connexion
        const res = await request(app)
            .get("/api/products")
        expect(res.statusCode).toEqual(200);
    })

    it('Wrong test', async() => {
        //connexion
        const res = await request(app)
            .get("/api/products/10")
        expect(res.statusCode).toEqual(404);
    })

    it('Valid test', async() => {
        //connexion
        const res = await request(app)
            .get("/api/categ/2/products")
        expect(res.statusCode).toEqual(200);
    })
})
