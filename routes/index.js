var express = require('express');
var router = express.Router();
var Web3 = require('web3');
var infura = require('../modules/infura');

infura.initializeWeb3('mainnet');

/* GET home page. */
router.get('/', function(req, res, next) {
  var syncObj = undefined;
  // Do web3 things
  web3.eth.isSyncing(function(error, sync){
    console.log("Update from isSyncing");
    if(!error) {
      // stop all app activity
      if(sync === true) {
      // we use `true`, so it stops all filters, but not the web3.eth.syncing polling
      // Do nothing for now, since we're testing Infura. web3.reset(true);
      
      // show sync info
      } else if(sync) {
        console.log("Syncing block: " + sync.currentBlock);
      
      // re-gain app operation
      } else {
        // run your app init function...
        var isConnected = false;
        web3.eth.net.isListening().then(function(isListening) {
          isConnected = isListening;

          var blockNumber = web3.blockNumber;
          console.log("block number: " + blockNumber);
          var txnID = '0xec786c3f715318c61c1bef4888584b28f407086d2364be7d7ea023ddfb3b8450';
          var txn = web3.eth.getTransaction(txnID).then(function(txn) {
            console.log(txn);
            res.render('index', {
              title: 'Etherium prototyping',
              isConnected: isConnected,
              blockNumber: blockNumber,
              txnid: txnID,
              txnJSON: JSON.stringify(txn)
            });
          });
        });
      }
    }
  });
});

module.exports = router;
