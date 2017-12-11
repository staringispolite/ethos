# ethos (n.) -
## The character, sentiment, or disposition of a community or people.

Etherium blockchain prototypes in 10 mins, no etherium node required for reads.

## Installation

* Digital Ocean or other server
* Sign up to Infura (free) to [get your token](https://blog.infura.io/getting-started-with-infura-28e41844cc89)
* `git clone https://github.com/staringispolite/ethos`
* `cd ethos`
* `npm install`
* `cp .env.sample .env`
* Add your token and desired network to .env
* `DEBUG=ethos:* npm start`
* Load http://server.ip.addr.here:3000 to see views/index.pug (via routes/index.js)


## Relevant Docs

* [Web3 (Etherium API)](https://github.com/ethereum/wiki/wiki/JavaScript-API#web3js-api-reference)
* Which heavily relies on [Promises](https://spring.io/understanding/javascript-promises)
* The server is Node using [Express](http://expressjs.com/en/guide/routing.html)
* [Pug templates](https://pugjs.org/language/attributes.html)
* More on [Infura](https://infura.docs.apiary.io), essentially a read-only cloud-based geth
