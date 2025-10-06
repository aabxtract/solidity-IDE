import React from 'react';
import { Code, CheckCircle2, Rocket } from 'lucide-react';

const HomePage = ({ onNavigate }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Solidity IDE</h1>
        <p className="text-xl text-gray-400 mb-12">
          Compile and deploy smart contracts with Monaco Editor, Solc, and Reown Kit
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <Code className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Monaco Editor</h3>
            <p className="text-gray-400">Professional code editor with Solidity syntax highlighting</p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Solc Compiler</h3>
            <p className="text-gray-400">Compile Solidity contracts directly in your browser</p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <Rocket className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Reown Deploy</h3>
            <p className="text-gray-400">Deploy to Ethereum networks with WalletConnect</p>
          </div>
        </div>

        <button
          onClick={() => onNavigate('editor')}
          className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;