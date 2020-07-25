# eth2stats-server

The dashboard can connect to multiple networks so you only need a single instance running.

### Server

[eth2stats-server repo](https://github.com/ConsenSys/eth2stats-server)
  
### Dashboard

- install dependencies
  ```
  cd dashboard
  npm install
  npm run install-dev
  ```
  
- create a `config.dev.jsonc`
  `cp config/config.dev.sample.jsonc config/config.dev.jsonc`
  
- in two terminals run  
  `npm run start`  
  `npm run watch`
  
### Client

[eth2stats-client repo](https://github.com/Alethio/eth2stats-client)