import React from 'react';
import { Code, Layers, Network, Shield, Zap, Globe } from 'lucide-react';

const AboutPage = () => {
  const features = [
    'Monaco Editor with Solidity syntax highlighting',
    'Client-side compilation with solc-js',
    'Wallet connection via Reown (WalletConnect)',
    'Deploy to Ethereum Mainnet and Sepolia testnet',
    'Real-time error detection and reporting',
    'Modern, responsive user interface'
  ];

  const technologies = [
    { name: 'Frontend', value: 'React 18, Tailwind CSS', icon: Code },
    { name: 'Editor', value: 'Monaco Editor', icon: Layers },
    { name: 'Compiler', value: 'solc-js 0.8.0', icon: Zap },
    { name: 'Web3', value: 'Reown, ethers.js', icon: Network }
  ];

  const networks = [
    { name: 'Ethereum Mainnet', chainId: '1', icon: Globe, color: 'blue' },
    { name: 'Sepolia Testnet', chainId: '11155111', icon: Shield, color: 'green' }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Solidity IDE
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A powerful, browser-based development environment for building and deploying smart contracts
          </p>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 mb-8 hover:border-blue-500/50 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Features</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Networks Section */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 mb-8 hover:border-green-500/50 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Network className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Supported Networks</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {networks.map((network, index) => {
              const Icon = network.icon;
              return (
                <div key={index} className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className={`w-6 h-6 text-${network.color}-400`} />
                    <div className={`font-bold text-lg text-${network.color}-400`}>{network.name}</div>
                  </div>
                  <div className="text-sm text-gray-400">Chain ID: <span className="font-mono text-gray-300">{network.chainId}</span></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Technologies</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div key={index} className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-purple-400" />
                    <div className="font-bold text-white">{tech.name}</div>
                  </div>
                  <div className="text-sm text-gray-400">{tech.value}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Built with ❤️ for the Web3 community
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;