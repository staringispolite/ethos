var Web3 = require('web3');

var infura = function() {
  var self = this;

  var token = undefined;    // Get yours here https://blog.infura.io/getting-started-with-infura-28e41844cc89
  var network = 'mainnet';  // Others available in docs.
  
  var privateObj = {
    initializeWeb3: function(network, token) {
      // If not given, find in env vars
      if (token === undefined) {
        // TODO: env vars
      }
      // Set up web3
      if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
      } else {
        // Set the provider you want from Web3.providers
        web3 = new Web3(new Web3.providers.HttpProvider("https://" + network + ".infura.io/" + token));
      }
    }
  };
  return privateObj;
}();

module.exports = infura;
