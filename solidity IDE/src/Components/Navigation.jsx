import React from 'react';
import { Home, FileCode, Settings, Code } from 'lucide-react';

const Navigation = ({ currentPage, onPageChange }) => {
  const pages = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'editor', label: 'Editor', icon: FileCode },
    { id: 'about', label: 'About', icon: Settings }
  ];

  return (
    <nav className="bg-gray-800 border-b border-gray-700 mb-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Code className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">Solidity IDE</span>
          </div>
          <div className="flex gap-1">
            {pages.map(page => {
              const Icon = page.icon;
              return (
                <button
                  key={page.id}
                  onClick={() => onPageChange(page.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                    currentPage === page.id 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {page.label}
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