import { useState } from 'react';

export const useDeployer = () => {
  const [deploying, setDeploying] = useState(false);
  const [deployedAddress, setDeployedAddress] = useState(null);
  const [error, setError] = useState(null);

  const deployContract = async (compiled) => {
    if (!compiled) {
      setError('Please compile the contract first');
      return;
    }

    setDeploying(true);
    setError(null);
    setDeployedAddress(null);

    try {
      const { ethers } = await import('https://cdn.jsdelivr.net/npm/ethers@5.7.2/+esm');
      
      if (!window.ethereum) {
        throw new Error('Please connect your wallet first');
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const factory = new ethers.ContractFactory(
        compiled.abi,
        compiled.bytecode,
        signer
      );

      const contract = await factory.deploy();
      await contract.deployed();

      setDeployedAddress(contract.address);
    } catch (err) {
      setError('Deployment failed: ' + err.message);
    }

    setDeploying(false);
  };

  return { deploying, deployedAddress, error, deployContract };
};