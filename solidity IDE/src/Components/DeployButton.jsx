import React from 'react';
import { Loader2, Rocket, Zap } from 'lucide-react';

const DeployButton = ({ onDeploy, deploying, disabled }) => {
  return (
    <button
      onClick={onDeploy}
      disabled={disabled || deploying}
      className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 disabled:from-gray-600 disabled:to-gray-700 px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105 disabled:scale-100 disabled:shadow-none overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/30 to-purple-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      {deploying ? (
        <Loader2 className="w-5 h-5 animate-spin relative z-10" />
      ) : (
        <>
          <Rocket className="w-5 h-5 relative z-10 group-hover:translate-y-[-2px] transition-transform" />
          <Zap className="w-4 h-4 absolute -top-1 -right-1 text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity" />
        </>
      )}
      <span className="font-semibold relative z-10">
        {deploying ? 'Deploying...' : 'Deploy'}
      </span>
    </button>
  );
};

export default DeployButton;