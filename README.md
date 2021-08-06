# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Navigate to eth-contracts

# install all dependencies
npm install

# compile the contracts
truffle compile

# Migrate to rinkeby test network
truffle migrate --network rinkeby --reset

# Deployment

1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        9067450
   > block timestamp:     1628251594
   > account:             0x3C98cAC049c0E65f6dcF418017907251b96E6341
   > balance:             0.995585023
   > gas used:            210237 (0x3353d)
   > gas price:           21 gwei
   > value sent:          0 ETH
   > total cost:          0.004414977 ETH

   -------------------------------------
   > Total cost:         0.004414977 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > block number:        9067452
   > block timestamp:     1628251600
   > account:             0x3C98cAC049c0E65f6dcF418017907251b96E6341
   > balance:             0.974686117
   > gas used:            967823 (0xec48f)
   > gas price:           21 gwei
   > value sent:          0 ETH
   > total cost:          0.020324283 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > block number:        9067453
   > block timestamp:     1628251613
   > account:             0x3C98cAC049c0E65f6dcF418017907251b96E6341
   > balance:             0.909607621
   > gas used:            3098976 (0x2f4960)
   > gas price:           21 gwei
   > value sent:          0 ETH
   > total cost:          0.065078496 ETH

   -------------------------------------
   > Total cost:         0.085402779 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.089817756 ETH



Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 29999829 (0x1c9c2d5)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x47962ea123163a6e75d560dde249426eface4791373ada0c5853f4997e14a852
   > Blocks: 0            Seconds: 8
   > contract address:    0x8F15b8D393fa750af164b557118636EC7fF7cB47
   > block number:        9067453
   > block timestamp:     1628251643
   > account:             0x3C98cAC049c0E65f6dcF418017907251b96E6341
   > balance:             0.995242723
   > gas used:            226537 (0x374e9)
   > gas price:           21 gwei
   > value sent:          0 ETH
   > total cost:          0.004757277 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.004757277 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x32fc177b6cbcc038eb03406dcc5a10f30e03d17d9bbcb3520f2be78e1ea361d9
   > Blocks: 0            Seconds: 4
   > contract address:    0x3603524C1A2ddC5c19844B38979af92699b682a0
   > block number:        9067455
   > block timestamp:     1628251673
   > account:             0x3C98cAC049c0E65f6dcF418017907251b96E6341
   > balance:             0.973957417
   > gas used:            967823 (0xec48f)
   > gas price:           21 gwei
   > value sent:          0 ETH
   > total cost:          0.020324283 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xae950587959ed445bef4f6524d004f12d3da0eed4b058441940cbbf806363a36
   > Blocks: 1            Seconds: 12
   > contract address:    0x1d59C33b8a664a549d7f0b8e16b29B30F1d0D44A
   > block number:        9067456
   > block timestamp:     1628251688
   > account:             0x3C98cAC049c0E65f6dcF418017907251b96E6341
   > balance:             0.904750321
   > gas used:            3295576 (0x324958)
   > gas price:           21 gwei
   > value sent:          0 ETH
   > total cost:          0.069207096 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.089531379 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.094288656 ETH

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
