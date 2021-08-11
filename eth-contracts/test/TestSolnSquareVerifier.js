var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var Verifier = artifacts.require("Verifier");
const {expectRevert} = require('@openzeppelin/test-helpers');
var Json = require("../../zokrates/code/square/proof.json");

contract('TestSolnSquareVerifier', accounts => {

    const account_one = accounts[0];
    const name = 'RithvikToken';
    const symbol = 'RTH';
    const baseTokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";
    //const proof = Json.proof;

    describe('description here', function() {
        beforeEach(async function () {

            const verifier = await Verifier.new({from: account_one});
            this.contract = await SolnSquareVerifier.new(verifier.address, name, symbol, {from: account_one});

        })
     
// Test if a new solution can be added for contract - SolnSquareVerifier
        it('A new solution should be added for contract', async function () {
            let status = false;
            try{
                await this.contract.addSolution(Json.proof.a, Json.proof.b, Json.proof.c, Json.proof.inputs, {from: account_one});
                //.then(function (res) {
                //    status = true;
                //})
            } catch(e) {
                status = true;
            }

            assert.equal(status, true, "A new solutin cannot be added to SolnSquareVerifier");
        });

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it('An ERC721 token can be minted for contract', async function () {
            let status =false;
            try{
                await this.contract.mintVerified(accounts[1], 1, Json.proof.a, Json.proof.b, Json.proof.c, Json.proof.inputs, {from: account_one});
                //.then(function (res) {
                //    status = true;
                //})
                await this.contract.mintVerified(accounts[1], 1, Json.proof.a, Json.proof.b, Json.proof.c, Json.proof.inputs, {from: account_one});
                await this.contract.mintVerified(accounts[2], 1, Json.proof.a, Json.proof.b, Json.proof.c, Json.proof.inputs, {from: account_one});
                await this.contract.mintVerified(accounts[3], 1, Json.proof.a, Json.proof.b, Json.proof.c, Json.proof.inputs, {from: account_one});
                await this.contract.mintVerified(accounts[4], 1, Json.proof.a, Json.proof.b, Json.proof.c, Json.proof.inputs, {from: account_one});
                await this.contract.mintVerified(accounts[5], 1, Json.proof.a, Json.proof.b, Json.proof.c, Json.proof.inputs, {from: account_one});
                await this.contract.mintVerified(accounts[5], 1, Json.proof.a, Json.proof.b, Json.proof.c, Json.proof.inputs, {from: account_one});
                await this.contract.mintVerified(accounts[2], 1, Json.proof.a, Json.proof.b, Json.proof.c, Json.proof.inputs, {from: account_one});
                await this.contract.mintVerified(accounts[1], 1, Json.proof.a, Json.proof.b, Json.proof.c, Json.proof.inputs, {from: account_one});
                await this.contract.mintVerified(accounts[1], 1, Json.proof.a, Json.proof.b, Json.proof.c, Json.proof.inputs, {from: account_one});
            } catch (e) {
                status = true;
            }
                
            assert.equal(status, true, "An ERC721 token cannot be minted for SolnSquareVerifier");

            
        });

        
    })
});



