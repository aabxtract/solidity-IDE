// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title SimpleTokenTransfer
 * @dev A simple contract to transfer ERC20 tokens from one wallet to another
 */
contract SimpleTokenTransfer {
    
    event TokensTransferred(
        address indexed token,
        address indexed from,
        address indexed to,
        uint256 amount
    );
    
    /**
     * @dev Transfer tokens from sender to recipient
     * @param token The ERC20 token contract address
     * @param to The recipient address
     * @param amount The amount of tokens to transfer
     */
    function transferToken(
        address token,
        address to,
        uint256 amount
    ) external {
        require(token != address(0), "Invalid token address");
        require(to != address(0), "Invalid recipient address");
        require(amount > 0, "Amount must be greater than 0");
        
        IERC20 erc20Token = IERC20(token);
        
        // Transfer tokens from sender to recipient
        require(
            erc20Token.transferFrom(msg.sender, to, amount),
            "Transfer failed"
        );
        
        emit TokensTransferred(token, msg.sender, to, amount);
    }
    
    /**
     * @dev Alternative: Direct transfer without contract (user must approve first)
     * This function transfers from msg.sender's balance directly
     */
    function simpleTransfer(
        address token,
        address to,
        uint256 amount
    ) external {
        require(token != address(0), "Invalid token address");
        require(to != address(0), "Invalid recipient address");
        require(amount > 0, "Amount must be greater than 0");
        
        IERC20 erc20Token = IERC20(token);
        
        // Check balance
        require(
            erc20Token.balanceOf(msg.sender) >= amount,
            "Insufficient balance"
        );
        
        // Transfer tokens
        require(
            erc20Token.transfer(to, amount),
            "Transfer failed"
        );
        
        emit TokensTransferred(token, msg.sender, to, amount);
    }
}
