var Web3 = require('web3');

var infura = function() {
  var self = this;

  var privateObj = {
    initializeWeb3: function(network, token) {
      // If not given, find in env vars
      if (token === undefined) {
        token = process.env.INFURA_TOKEN;
      }
      if (network === undefined) {
        network = process.env.INFURA_NETWORK;
      }
      if (token === undefined || network === undefined) {
        console.error('token or network not given, and not found in .env');
      }
      // Set up web3
      if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
      } else {
        // Set the provider you want from Web3.providers
        var infuraURL = "https://" + network + ".infura.io/" + token;
        web3 = new Web3(new Web3.providers.HttpProvider(infuraURL));
      }
    }
  };
  return privateObj;
}();

module.exports = infura;
