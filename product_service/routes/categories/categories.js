const express = require('express');
const router = express.Router();
const connection = require('../../connect');


/* GET users listing. */
router.get('/', (req,res,next)=> {
    connection.query('SELECT * FROM Product', (err,results,fields) => {
        !err ?res.json(results) : res.json({err});
    });
});

module.exports = router;
