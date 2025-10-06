import React from 'react';
import { Home, FileCode, Settings, Code, Sparkles } from 'lucide-react';

const Navigation = ({ currentPage, onPageChange }) => {
  const pages = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'editor', label: 'Editor', icon: FileCode },
    { id: 'about', label: 'About', icon: Settings }
  ];

  return (
    <nav className="bg-gradient-to-b from-gray-900 via-gray-900 to-transparent border-b border-gray-800/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <Code className="w-10 h-10 text-blue-500 transition-transform group-hover:scale-110" />
              <Sparkles className="w-5 h-5 text-blue-400 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Solidity IDE
              </span>
              <p className="text-xs text-gray-500">Web3 Development Platform</p>
            </div>
          </div>
          <div className="flex gap-2">
            {pages.map(page => {
              const Icon = page.icon;
              const isActive = currentPage === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => onPageChange(page.id)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30' 
                      : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 rounded-xl animate-pulse"></div>
                  )}
                  <Icon className={`w-4 h-4 relative z-10 ${isActive ? 'animate-pulse' : ''}`} />
                  <span className="font-medium relative z-10">{page.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;