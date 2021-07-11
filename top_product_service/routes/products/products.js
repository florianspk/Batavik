/* GET users listing. */
router.get('/', (req,res,next)=> {
    connection.query('SELECT * FROM Product', (err,results,fields) => {
        !err ?res.json(results) : res.json({err});
    });
});