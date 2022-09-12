pragma solidity ˆ0.8.0;

contract Modifiers {
    uint minimumBid;
    uint actualBid;
    modifier passesMinimumBidSize(uint _bidSize) {
        if(_bidSize >= minimumBid){
            _;
        }else{
            revert("Please insert bid above 10!");
        }
    }

    constructor() {
        minimumBid = 10;
    } 

    function submitNewBid(uint _bidSize) public passesMinimumBidSize(_bidSize) returns (uint){
        actualBid = _bidSize;
        return actualBid;
    }
}