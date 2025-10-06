import React from 'react';
import { Wallet, ChevronRight } from 'lucide-react';

const WalletButton = ({ account, onConnect }) => {
  return (
    <button
      onClick={onConnect}
      className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      <Wallet className="w-5 h-5 relative z-10" />
      <span className="font-semibold relative z-10">
        {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
      </span>
      {!account && <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />}
    </button>
  );
};

export default WalletButton;