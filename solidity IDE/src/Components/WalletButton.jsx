import React from 'react';
import { Wallet } from 'lucide-react';

const WalletButton = ({ account, onConnect }) => {
  return (
    <button
      onClick={onConnect}
      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
    >
      <Wallet className="w-5 h-5" />
      {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
    </button>
  );
};

export default WalletButton;