import React from 'react';
import { Loader2, Rocket } from 'lucide-react';

const DeployButton = ({ onDeploy, deploying, disabled }) => {
  return (
    <button
      onClick={onDeploy}
      disabled={disabled || deploying}
      className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 px-4 py-2 rounded-lg transition"
    >
      {deploying ? <Loader2 className="w-5 h-5 animate-spin" /> : <Rocket className="w-5 h-5" />}
      {deploying ? 'Deploying...' : 'Deploy'}
    </button>
  );
};

export default DeployButton;