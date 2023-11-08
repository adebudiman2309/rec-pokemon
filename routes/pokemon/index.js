var express = require('express');
var router = express.Router();

const fibonacci = require('../../services/fibonacci/fibonacci');
const primeNumber = require('../../services/prime-number/prime-number');
const { getRandom } = require('../../services/random/random');

router.get('/catch-pokemon', async function(req, res, next) {
  var probability = 0.5;
  var result = Math.random() < probability;

  res.send({data: result});
});

router.get('/release-pokemon', async function(req, res, next) {
    var random = getRandom(2,20);

    var isPrime = primeNumber.isPrime(random);
  
    res.send({data: isPrime});
});

router.get('/rename-pokemon/:count', async function(req, res, next) {
    var count = req.params.count;

    var fibonacciNumber = fibonacci.iterativeFib(count);
  
    res.send({data: fibonacciNumber});
});


module.exports = router;
