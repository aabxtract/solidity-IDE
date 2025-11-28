// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/*
    IDEAccess.sol
    A simple smart contract to register wallets for using a Solidity IDE.
    - Wallets can initiate access once.
    - Owner/admin can track registered users.
    - Events emitted for each registration.
*/

contract IDEAccess {
    address public owner;

    // Track which wallets have initiated access
    mapping(address => bool) public hasInitiated;

    // Event emitted when a wallet initiates access
    event AccessInitiated(address indexed user, uint256 timestamp);

    // Optional: list of all registered users
    address[] public registeredUsers;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not contract owner");
        _;
    }

    constructor() {
        owner = msg.sender; // deployer is owner/admin
    }

    /**
     * @dev Wallet initiates access to the IDE.
     */
    function initiateAccess() external {
        require(!hasInitiated[msg.sender], "Already initiated");

        hasInitiated[msg.sender] = true;
        registeredUsers.push(msg.sender);

        emit AccessInitiated(msg.sender, block.timestamp);
    }

    /**
     * @dev Check if a wallet has initiated access
     */
    function checkAccess(address user) external view returns (bool) {
        return hasInitiated[user];
    }

    /**
     * @dev Get total registered users
     */
    function getRegisteredUsers() external view returns (address[] memory) {
        return registeredUsers;
    }

    /**
     * @dev Optional: owner can revoke access
     */
    function revokeAccess(address user) external onlyOwner {
        require(hasInitiated[user], "User not registered");
        hasInitiated[user] = false;

        // Optionally, remove from registeredUsers array (more complex)
        emit AccessInitiated(user, block.timestamp); // can emit event for tracking
    }
}
