pragma solidity ^0.8.17;

contract MultiSignature {

    struct UserProfile {
        bool isRegistered;
        bool isAdmin;
    }

    uint constant M = 2;
    address[] multiCalls = new address[](0);

    bool public operational;

    address private contractOwner; // Account used to deploy contract
    mapping(address => UserProfile) userProfiles; // Mapping for storing user profiles

    constructor() {
        contractOwner = msg.sender;
        operational = true;
    }


    modifier requireContractOwner() {
        require(msg.sender == contractOwner, "Caller is not contract owner");
        _;
    }

    modifier requireIsOperational() {
        require(operational, "The smart contract is not operational at the moment");
        _;
    }

    function isUserRegistered(address account) external view requireIsOperational returns  (bool) {
        require(account != address(0), "'account' must be a valid address.");
        return userProfiles[account].isRegistered;
    }

    function registerUser(address account, bool isAdmin)
        external
        requireContractOwner
        requireIsOperational
    {
        require(
            !userProfiles[account].isRegistered,
            "User is already registered."
        );

        userProfiles[account] = UserProfile({
            isRegistered: true,
            isAdmin: isAdmin
        });
    }

    function setOperational(bool isOperational) external {
        require(isOperational != operational, "New mode must be setup when using this method");
        require(userProfiles[msg.sender].isAdmin, "Caller is not an admin and shouldn't call this function");

        bool isDuplicateSignature = false;
        for(uint i = 0; i < multiCalls.length; i++){
            if(multiCalls[i] == msg.sender){
                isDuplicateSignature = true;
                break;
            }
        }
        require(!isDuplicateSignature, "Caller has already called and signed this function");

        multiCalls.push(msg.sender);
        if(multiCalls.length >= M) {
            multiCalls = new address[](0);
            operational = isOperational;
        }
    }
}
