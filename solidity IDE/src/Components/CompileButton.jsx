import React from 'react';
import { Loader2, Code } from 'lucide-react';

const CompileButton = ({ onCompile, compiling }) => {
  return (
    <button
      onClick={onCompile}
      disabled={compiling}
      className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 px-4 py-2 rounded-lg transition"
    >
      {compiling ? <Loader2 className="w-5 h-5 animate-spin" /> : <Code className="w-5 h-5" />}
      {compiling ? 'Compiling...' : 'Compile'}
    </button>
  );
};

export default CompileButton;