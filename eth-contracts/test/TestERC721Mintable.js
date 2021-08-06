var ERC721MintableComplete = artifacts.require('RithvikToken');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];
    const baseURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account_one,1, baseURI+"1");
            await this.contract.mint(account_two,2, baseURI+"2");
        })

        it('should return total supply', async function () { 
            let supply = await this.contract.totalSupply();
            assert.equal(supply, 2, "Total supply is not correct");
        })

        it('should get token balance', async function () { 
            let balance = await this.contract.balanceOf(account_one);
            let balance1 = await this.contract.balanceOf(account_two);
            console.log("balance", balance);
            console.log("balance1", balance1);
            assert.equal(balance, 1, "balance of the account account_one is not correct");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let uri = await this.contract.tokenURI(1);
            console.log(uri);
            assert.equal(uri, baseURI+"1", "uri of the token is not correct");
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.transferFrom(account_two, account_three, 2, {from: account_two});
            let newOwner = await this.contract.ownerOf(2);
            console.log(newOwner);
            assert.equal(newOwner, account_three, " Token is not transfered");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        //it('should fail when minting when address is not contract owner', async function () { 
        //    var minted = false;
        //    let owner = await this.contract.getOwner();
        //    console.log('owner', owner);
        //   console.log('account_two',account_two);
        //    console.log('account_one',account_one);
        //    try {
        //        await this.contract.mint(account_three, 3, {from: account_two});
        //    } catch(e) {
        //        minted = true;
        //    }
        //    assert.equal(minted, true, "minting is not done by contract owner");
        //});

        it('should return contract owner', async function () { 
            let owner = await this.contract.getOwner();
            assert(owner, account_one, "Owner is not asserted correctly to be account_one");
            await this.contract.transferOwnership(account_two);
            let newOwner = await this.contract.getOwner();
            assert(newOwner, account_two, "Owner is not switched correctly to be account_two");
        });

    });
})