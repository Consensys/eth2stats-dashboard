# eth2stats-dashboard

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

- Set the `ETH2STATS_DEV_SERVER` variable to `true` to use the `local` connection instead of the `remote` one. 

- in two terminals run  
  `npm run start`  
  `npm run watch`
  
### Client

[eth2stats-client repo](https://github.com/Alethio/eth2stats-client)