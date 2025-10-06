import { useState } from 'react';

export const useCompiler = () => {
  const [compiled, setCompiled] = useState(null);
  const [compiling, setCompiling] = useState(false);
  const [error, setError] = useState(null);

  const compileContract = async (code) => {
    setCompiling(true);
    setError(null);
    setCompiled(null);

    try {
      if (!window.Module) {
        const solcScript = document.createElement('script');
        solcScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/solc-js/0.8.0/solc.min.js';
        document.body.appendChild(solcScript);

        await new Promise((resolve) => {
          solcScript.onload = resolve;
        });
      }

      const solc = window.Module;

      const input = {
        language: 'Solidity',
        sources: {
          'contract.sol': {
            content: code
          }
        },
        settings: {
          outputSelection: {
            '*': {
              '*': ['abi', 'evm.bytecode']
            }
          }
        }
      };

      const output = JSON.parse(solc.compile(JSON.stringify(input)));

      if (output.errors) {
        const errors = output.errors.filter(e => e.severity === 'error');
        if (errors.length > 0) {
          setError(errors[0].formattedMessage);
          setCompiling(false);
          return;
        }
      }

      const contractName = Object.keys(output.contracts['contract.sol'])[0];
      const contract = output.contracts['contract.sol'][contractName];

      setCompiled({
        abi: contract.abi,
        bytecode: contract.evm.bytecode.object,
        name: contractName
      });
    } catch (err) {
      setError(err.message);
    }

    setCompiling(false);
  };

  return { compiled, compiling, error, compileContract };
};