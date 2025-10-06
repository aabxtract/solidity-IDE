import React from 'react';
import { Loader2, Code, Sparkles } from 'lucide-react';

const CompileButton = ({ onCompile, compiling }) => {
  return (
    <button
      onClick={onCompile}
      disabled={compiling}
      className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 disabled:from-gray-600 disabled:to-gray-700 px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 hover:scale-105 disabled:scale-100 disabled:shadow-none overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/30 to-green-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      {compiling ? (
        <Loader2 className="w-5 h-5 animate-spin relative z-10" />
      ) : (
        <>
          <Code className="w-5 h-5 relative z-10" />
          <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-green-300 opacity-0 group-hover:opacity-100 transition-opacity" />
        </>
      )}
      <span className="font-semibold relative z-10">
        {compiling ? 'Compiling...' : 'Compile'}
      </span>
    </button>
  );
};

export default CompileButton;