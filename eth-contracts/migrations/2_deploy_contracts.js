// migrating the appropriate contracts
var SquareVerifier = artifacts.require("../../zokrates/code/square/verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var ERC721Token = artifacts.require("./RithvikToken.sol");

module.exports = function(deployer) {
  //let baseTokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";
  let name = "RithvikToken";
  let symbol = "RTH";

  deployer.deploy(ERC721Token, name, symbol);
  //let address = "0x3C98cAC049c0E65f6dcF418017907251b96E6341";
  deployer.deploy(SquareVerifier)
  .then(() => {
    return deployer.deploy(SolnSquareVerifier, SquareVerifier.address, name, symbol);
  
  });
};
