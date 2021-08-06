// migrating the appropriate contracts
var SquareVerifier = artifacts.require("../../zokrates/code/square/verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {
  //let baseTokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";
  let name = "RithvikToken";
  let symbol = "RTH";
  let address = "0x3C98cAC049c0E65f6dcF418017907251b96E6341";
  deployer.deploy(SquareVerifier)
  .then(() => {
    return deployer.deploy(SolnSquareVerifier, address, name, symbol)
  
  });
};
