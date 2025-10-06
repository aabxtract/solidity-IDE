import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Solidity IDE</h2>
        
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-xl font-semibold mb-4">Features</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Monaco Editor with Solidity syntax highlighting</li>
            <li>• Client-side compilation with solc-js</li>
            <li>• Wallet connection via Reown (WalletConnect)</li>
            <li>• Deploy to Ethereum Mainnet and Sepolia testnet</li>
            <li>• Real-time error detection and reporting</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-xl font-semibold mb-4">Supported Networks</h3>
          <div className="space-y-3">
            <div>
              <div className="font-semibold text-blue-400">Ethereum Mainnet</div>
              <div className="text-sm text-gray-400">Chain ID: 1</div>
            </div>
            <div>
              <div className="font-semibold text-blue-400">Sepolia Testnet</div>
              <div className="text-sm text-gray-400">Chain ID: 11155111</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Technologies</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="font-semibold">Frontend</div>
              <div className="text-sm text-gray-400">React, Tailwind CSS</div>
            </div>
            <div>
              <div className="font-semibold">Editor</div>
              <div className="text-sm text-gray-400">Monaco Editor</div>
            </div>
            <div>
              <div className="font-semibold">Compiler</div>
              <div className="text-sm text-gray-400">solc-js 0.8.0</div>
            </div>
            <div>
              <div className="font-semibold">Web3</div>
              <div className="text-sm text-gray-400">Reown, ethers.js</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;