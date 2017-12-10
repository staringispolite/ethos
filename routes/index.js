var express = require('express');
var router = express.Router();
var Web3 = require('web3');

/* GET home page. */
router.get('/', function(req, res, next) {
  var isConnected = false;
  web3.eth.net.isListening().then(function(isListening) {
    isConnected = isListening;

    res.render('index', {
      title: 'Etherium prototyping',
      isConnected: isConnected,
      network: process.env.INFURA_NETWORK
    });
  });
});

module.exports = router;
