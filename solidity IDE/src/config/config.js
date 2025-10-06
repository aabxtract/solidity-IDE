export const config = {
  projectId: '49a747a3d123522bfedeabafbe70e8c9',
  chains: {
    mainnet: {
      chainId: 1,
      name: 'Ethereum',
      currency: 'ETH',
      explorerUrl: 'https://etherscan.io',
      rpcUrl: 'https://cloudflare-eth.com'
    },
    sepolia: {
      chainId: 11155111,
      name: 'Sepolia',
      currency: 'ETH',
      explorerUrl: 'https://sepolia.etherscan.io',
      rpcUrl: 'https://rpc.sepolia.org'
    }
  },
  metadata: {
    name: 'Solidity IDE',
    description: 'Compile and Deploy Smart Contracts',
    url: 'https://myapp.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  }
};

export const SAMPLE_CONTRACT = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private value;
    
    event ValueChanged(uint256 newValue);
    
    function setValue(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }
    
    function getValue() public view returns (uint256) {
        return value;
    }
}`;