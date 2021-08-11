pragma solidity >=0.4.21 <0.6.5;

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
//import "./verifier.sol";
import "../../zokrates/code/square/verifier.sol";
import "./ERC721Mintable.sol";

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is RithvikToken {
    Verifier squareVerifier;

    constructor(
        address _address, string memory _name, string memory _symbol
    ) RithvikToken(_name, _symbol) public
    //) RithvikToken(_name, _symbol) public  
    {
        squareVerifier = Verifier(_address);
    }
// TODO define a solutions struct that can hold an index & an address
struct Solution{
    uint256 _index;
    address _address;
    bool _minted;
}

uint256 solutionCounter = 1;
// TODO define an array of the above struct
//mapping(bytes32 => Solution) private solutions;

// TODO define a mapping to store unique solutions submitted
mapping(bytes32 => Solution) private solutionsSubmitted;


// TODO Create an event to emit when a solution is added
event solutionAdded(bytes32 solutionKey, address solutionAddress);

// TODO Create a function to add the solutions to the array and emit the event
function addSolution(
    uint256[2] memory a,
    uint256[2][2] memory b,
    uint256[2] memory c,
    uint256[2] memory input
) public {
    bytes32 key = keccak256(abi.encodePacked(a, b, c, input));

    require(solutionsSubmitted[key]._index == 0, "Solution already exists");
    solutionsSubmitted[key] = Solution({
        _index: solutionCounter,
        _address: msg.sender,
        _minted: true
    });
    solutionCounter += 1;

    emit solutionAdded(key, msg.sender);
}


// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly
function mintVerified(
    address to,
    uint256 tokenId,
    uint256[2] memory a,
    uint256[2][2] memory b,
    uint256[2] memory c,
    uint256[2] memory input
) public {
        require(squareVerifier.verifyTx(a, b, c, input), "Incorrect Solution");
        addSolution(a, b, c, input);
        super._mint(to, tokenId);
}

}


























