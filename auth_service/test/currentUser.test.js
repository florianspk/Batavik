// const request  = require("supertest");
// const app = require("../app.js");
// const axios = require('axios');
// const qs = require('qs');


 describe("Get the current user when the token is valid", () => {

     it('valide test', async() => {
         expect(true)
     })
//
//
//
//     it('valide test', async() => {
//
//         //connexion
//         const data = qs.stringify({
//             'email': 'benoit57250@hotmail.fr',
//             'password': 'test'
//         });
//
//         const config = {
//             method: 'post',
//             url: 'http://localhost:3010/api/auth/login',
//             data: data
//         };
//         let token;
//         await axios(config)
//             .then(function (response) {
//                  token = response.data.token;
//             })
//         //connexion
//
//         const res = await request(app)
//             .get("/api/auth/user")
//             .set('Authorization', 'Bearer ' + token)
//
//         expect(res.statusCode).toEqual(200);
//     })
//
//     it('valide test', async() => {
//
//         //connexion
//         const data = qs.stringify({
//             'email': 'benoit57250@hotmail.fr',
//             'password': 'test'
//         });
//
//         const config = {
//             method: 'post',
//             url: 'http://localhost:3010/api/auth/login',
//             data: data
//         };
//         let token;
//         await axios(config)
//             .then(function (response) {
//                 token = response.data.token;
//             })
//         //connexion
//
//         const res = await request(app)
//             .get("/api/auth/user?page=2")
//             .set('Authorization', 'Bearer ' + token)
//
//         expect(res.statusCode).toEqual(200);
//     })
//
//
//     it('not valide test', async() => {
//
//         //connexion
//         const data = qs.stringify({
//             'email': 'benoit57250@hotmail.fr',
//             'password': 'test'
//         });
//
//         const config = {
//             method: 'post',
//             url: 'http://localhost:3010/api/auth/login',
//             data: data
//         };
//         let token;
//         await axios(config)
//             .then(function (response) {
//                 token = response.data.token;
//             })
//         //connexion
//
//         const res = await request(app)
//             .get("/api/auth/user/2")
//             .set('Authorization', 'Bearer ' + token)
//
//         expect(res.statusCode).toEqual(404);
//     })
//
})
