pragma solidity ^0.8.17;

contract MultiSignature {

    struct UserProfile {
        bool isRegistered;
        bool isAdmin;
    }

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

    function setOperational(bool isOperational) external requireContractOwner {
        operational = isOperational;
    }
}
