import React, { useState } from 'react';
import Navigation from './Components/Navigation';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900/0 to-gray-900/0 pointer-events-none"></div>
      <div className="relative z-10">
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
    </div>
  );
}

export default App;