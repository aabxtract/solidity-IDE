import { useState, useEffect } from 'react';
import { config } from '../config/config';

export const useWeb3 = () => {
  const [web3Modal, setWeb3Modal] = useState(null);
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    initializeReown();
  }, []);

  const initializeReown = async () => {
    try {
      const { createWeb3Modal, defaultConfig } = await import('https://cdn.jsdelivr.net/npm/@web3modal/ethers5@latest/+esm');
      
      const ethersConfig = defaultConfig({ metadata: config.metadata });
      
      const modal = createWeb3Modal({
        ethersConfig,
        chains: [config.chains.mainnet, config.chains.sepolia],
        projectId: config.projectId
      });

      setWeb3Modal(modal);
    } catch (err) {
      console.error('Reown initialization error:', err);
      setError('Failed to initialize Web3');
    }
  };

  const connectWallet = async () => {
    if (!web3Modal) {
      setError('Reown not initialized');
      return;
    }
    
    try {
      await web3Modal.open();
      
      if (window.ethereum) {
        const { ethers } = await import('https://cdn.jsdelivr.net/npm/ethers@5.7.2/+esm');
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
      }
    } catch (err) {
      setError('Failed to connect wallet: ' + err.message);
    }
  };

  return { web3Modal, account, connectWallet, error };
};