var express = require('express');
var router = express.Router();
var Web3 = require('web3');

/* GET transactions page. */
//TODO: Get template working and test get params
router.get('/', function(req, res, next) {
  // Do web3 things
  web3.eth.isSyncing(function(error, sync){
    console.log("Update from isSyncing");
    if (error) {
      console.error("Error: " + error); 
    } else {
      if(sync === true) {
        // stop all app activity
        // we use `true`, so it stops all filters, but not the web3.eth.syncing polling
        // Do nothing for now, since we're testing Infura. web3.reset(true);
        console.log("Sync === true");
      } else if(sync) {
        // show sync info
        console.log("Syncing block: " + sync.currentBlock);
      } else {
        // re-gain app operation
        // run your app init function...
        var isConnected = false;
        console.log("testing connection");
        web3.eth.net.isListening().then(function(isListening) {
          isConnected = isListening;

          var txnID = req.query.txn_id;
          var txn = web3.eth.getTransaction(txnID).then(function(txn) {
            console.log(txn);
            res.render('transactions', {
              title: 'Transaction Details',
              txnid: txnID,
              txnJSON: JSON.stringify(txn).replace(/,/g, ",\n")
            });
          });
        });
      }
    }
  });
});

module.exports = router;
