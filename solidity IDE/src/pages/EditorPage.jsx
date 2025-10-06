import React from 'react';
import MonacoEditor from '../Components/MonacoEditor';
import Alert from '../Components/Alert';
import WalletButton from '../Components/WalletButton';
import CompileButton from '../Components/CompileButton';
import DeployButton from '../Components/DeployButton';
import { Terminal, Layers, Cpu } from 'lucide-react';

const EditorPage = ({ 
  code, 
  setCode, 
  compiled, 
  compiling, 
  error, 
  deploying, 
  deployedAddress, 
  account,
  onCompile,
  onDeploy,
  onConnect
}) => {
  return (
    <div className="container mx-auto px-6 pb-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <Terminal className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Smart Contract Editor</h2>
            <p className="text-gray-400">Write, compile, and deploy your Solidity contracts</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <WalletButton account={account} onConnect={onConnect} />
        <CompileButton onCompile={onCompile} compiling={compiling} />
        <DeployButton onDeploy={onDeploy} deploying={deploying} disabled={!compiled} />
      </div>

      {/* Alerts */}
      {error && <Alert type="error" message={error} />}
      
      {compiled && (
        <Alert 
          type="success" 
          title="✨ Compiled successfully!" 
          message={`Contract: ${compiled.name}\nABI Size: ${compiled.abi.length} entries\nBytecode: ${compiled.bytecode.length} bytes`} 
        />
      )}

      {deployedAddress && (
        <Alert 
          type="info" 
          title="🚀 Deployment Successful!" 
          message={`Contract Address: ${deployedAddress}\n\nYou can now interact with your contract on the blockchain.`} 
        />
      )}

      {/* Editor */}
      <MonacoEditor value={code} onChange={setCode} />

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50">
          <div className="flex items-center gap-3 mb-2">
            <Layers className="w-5 h-5 text-blue-400" />
            <h3 className="font-semibold text-white">Compiler</h3>
          </div>
          <p className="text-sm text-gray-400">Solidity 0.8.0</p>
        </div>
        
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50">
          <div className="flex items-center gap-3 mb-2">
            <Cpu className="w-5 h-5 text-green-400" />
            <h3 className="font-semibold text-white">Network</h3>
          </div>
          <p className="text-sm text-gray-400">Ethereum & Sepolia</p>
        </div>
        
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50">
          <div className="flex items-center gap-3 mb-2">
            <Terminal className="w-5 h-5 text-purple-400" />
            <h3 className="font-semibold text-white">Status</h3>
          </div>
          <p className="text-sm text-gray-400">
            {compiled ? '✓ Ready to Deploy' : '○ Waiting for Compilation'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;