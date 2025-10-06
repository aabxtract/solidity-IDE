import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import EditorPage from './pages/EditorPage';
import AboutPage from './pages/AboutPage';
import { useWeb3 } from './hooks/useWeb3';
import { useCompiler } from './hooks/useCompiler';
import { useDeployer } from './hooks/useDeployer';
import { SAMPLE_CONTRACT } from './config/config';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [code, setCode] = useState(SAMPLE_CONTRACT);
  
  const { account, connectWallet, error: web3Error } = useWeb3();
  const { compiled, compiling, error: compileError, compileContract } = useCompiler();
  const { deploying, deployedAddress, error: deployError, deployContract } = useDeployer();

  const error = web3Error || compileError || deployError;

  const handleCompile = () => {
    compileContract(code);
  };

  const handleDeploy = () => {
    deployContract(compiled);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
      
      {currentPage === 'editor' && (
        <EditorPage
          code={code}
          setCode={setCode}
          compiled={compiled}
          compiling={compiling}
          error={error}
          deploying={deploying}
          deployedAddress={deployedAddress}
          account={account}
          onCompile={handleCompile}
          onDeploy={handleDeploy}
          onConnect={connectWallet}
        />
      )}
      
      {currentPage === 'about' && <AboutPage />}
    </div>
  );
}

export default App;