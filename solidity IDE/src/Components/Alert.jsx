import React from 'react';
import { AlertCircle, CheckCircle2, Info } from 'lucide-react';

const Alert = ({ type, message, title }) => {
  const styles = {
    error: 'bg-gradient-to-r from-red-500/10 to-red-600/10 border-red-500/50 text-red-100',
    success: 'bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/50 text-green-100',
    info: 'bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-blue-500/50 text-blue-100'
  };

  const icons = {
    error: <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />,
    success: <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />,
    info: <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
  };

  return (
    <div className={`${styles[type]} border rounded-xl p-5 mb-4 flex items-start gap-3 shadow-lg backdrop-blur-sm animate-fadeIn`}>
      {icons[type]}
      <div className="text-sm flex-1">
        {title && <div className="font-bold mb-1 text-base">{title}</div>}
        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed opacity-90">{message}</pre>
      </div>
    </div>
  );
};

export default Alert;