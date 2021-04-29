var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    _id: "4520ehjifc7df87",
    name: "Julien",
    mail: "j.kxxx@xxxx.fr",
    address: "55 rue XXXX, 55025, XXX"
  }]);
});

module.exports = router;
