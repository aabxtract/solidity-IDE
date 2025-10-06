import React from 'react';
import MonacoEditor from '../Components/MonacoEditor';
import Alert from '../Components/Alert';
import WalletButton from '../Components/WalletButton';
import CompileButton from '../Components/CompileButton';
import DeployButton from '../Components/DeployButton';

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
    <div className="container mx-auto px-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Smart Contract Editor</h2>
        <p className="text-gray-400">Write, compile, and deploy your Solidity contracts</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <WalletButton account={account} onConnect={onConnect} />
        <CompileButton onCompile={onCompile} compiling={compiling} />
        <DeployButton onDeploy={onDeploy} deploying={deploying} disabled={!compiled} />
      </div>

      {error && <Alert type="error" message={error} />}
      
      {compiled && (
        <Alert 
          type="success" 
          title="Compiled successfully!" 
          message={`Contract: ${compiled.name}`} 
        />
      )}

      {deployedAddress && (
        <Alert 
          type="info" 
          title="Deployed at:" 
          message={deployedAddress} 
        />
      )}

      <MonacoEditor value={code} onChange={setCode} />
    </div>
  );
};

export default EditorPage;